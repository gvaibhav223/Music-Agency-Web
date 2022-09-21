import React, { createContext, useState, useEffect } from "react";
import { injected } from "src/connectors";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import { apiConfig } from "src/constants/";
import { toast } from "react-toastify";
import { ACTIVE_NETWORK } from "src/constants";
import { getWeb3Obj } from "src/utils";
export const UserContext = createContext();

const setSession = (userAddress) => {
  if (userAddress) {
    sessionStorage.setItem("userAddress", userAddress);
  } else {
    sessionStorage.removeItem("userAddress");
  }
};

const setTokenSession = (token) => {
  if (token) {
    sessionStorage.setItem("token", token);
  } else {
    sessionStorage.removeItem("token");
  }
};

export default function AuthProvider(props) {
  const { activate, account, chainId, deactivate } = useWeb3React();
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState();
  const [yourWalletBalance, setYourWalletBalance] = useState(0);
  const connectToWallet = (data) => {
    const connector = injected;
    if (connector && connector.walletConnectProvider?.wc?.uri) {
      connector.walletConnectProvider = undefined;
    }
    activate(connector, undefined, true).catch((error) => {
      if (error) {
        console.log("error", error.message);
        // setErrorMsg(error.message + " Please install " + data.name);
        activate(connector);
        // setIsLoading(false);
        // setErrorPop(true);
      }
    });
  };

  const swichNetworkHandler = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x" + ACTIVE_NETWORK.toString(16) }],
      });
    } catch (error) {
      console.log("ERROR", error);

      toast.warn(error.message);
      // if (error.code === 4902) {
      //   addNetworkHandler();
      // }
    }
  };
  useEffect(() => {
    if (account && chainId) {
      if (chainId !== ACTIVE_NETWORK) {
        if (window.ethereum) {
          swichNetworkHandler();
        }
      }
    }
  }, [chainId, account]);

  let data = {
    isLogin,
    userData,
    yourWalletBalance,
    updateUser: (account) => {
      setSession(account);
    },
    getUserProfile: () => getUserProfile(),
    connectWallet: () => connectToWallet(),
  };

  useEffect(() => {
    if (account) {
      connectWalletHandler(account);
      getUserbalce();
    }
  }, [account]);

  const getUserProfile = async () => {
    try {
      const res = await axios({
        method: "get",
        url: apiConfig.getProfile,
        headers: {
          token: window.sessionStorage.getItem("token"),
        },
      });
      if (res.data.response_code === 200) {
        console.log(res.data.result);
        setUserData(res.data.result);
      } else {
        setUserData();
      }
    } catch (error) {
      console.log("error", error);
      setUserData();
    }
  };
  const getUserbalce = async () => {
    const web3 = await getWeb3Obj();
    const balance = await web3.eth.getBalance(account);
    const balanceImETH = await web3.utils.fromWei(balance);
    setYourWalletBalance(parseFloat(balanceImETH).toFixed(2));
  };
  // useEffect(() => {
  //   if (isLogin) {
  //     getUserProfile()
  //   }
  // }, [isLogin,])

  const connectWalletHandler = async (walletAddress) => {
    try {
      const res = await axios.post(apiConfig.connectWallet, {
        walletAddress,
      });
      if (res.data.response_code === 200) {
        setTokenSession(res.data.result.token);
        getUserProfile(res.data.result.token);
        setIsLogin(true);
        // toast.success('Connected successfully')
      } else {
        setIsLogin(false);
        toast.success(res.data.response_message);
      }
    } catch (error) {
      console.log("ERROR", error);
      setIsLogin(false);
      toast.success(error.message);
    }
  };

  useEffect(() => {
    const userAddress = window.sessionStorage.getItem("userAddress");
    if (userAddress) {
      data.connectWallet();
    }
  }, []); //eslint-disable-line

  useEffect(() => {
    data.updateUser(account);
  }, [account]); //eslint-disable-line

  return (
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  );
}
