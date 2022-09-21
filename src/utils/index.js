import { Contract } from "@ethersproject/contracts";
import axios from "axios";
import { apiConfig, RPC_URL } from "src/constants";
import Web3 from "web3";

export function sortAddress(add) {
  const sortAdd = `${add?.slice(0, 6)}...${add?.slice(add.length - 4)}`;
  return sortAdd;
}

export function getSigner(library, account) {
  return library.getSigner(account).connectUnchecked();
}

export function getProviderOrSigner(library, account) {
  return account ? getSigner(library, account) : library;
}

export const getContract = (address, ABI, library, account) => {
  return new Contract(address, ABI, getProviderOrSigner(library, account));
};

export const getWeb3Obj = async () => {
  const httpProvider = new Web3.providers.HttpProvider(RPC_URL);
  const web3 = new Web3(httpProvider);
  return web3;
};

export const getWeb3ContractObject = async (abi, contractAddress) => {
  const web3 = await getWeb3Obj();
  const contract = new web3.eth.Contract(abi, contractAddress);
  return contract;
};

export const addImageHandler = (files) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append("file", files);
    axios({
      method: "post",
      url: apiConfig.addImage,
      data: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        if (res.data.response_code === 200) {
          console.log(res.data);
          sessionStorage.setItem(
            "ImageHash",
            JSON.stringify(res.data.result.imageUrl)
          );
          resolve(res.data.result.imageUrl);
        } else {
          reject(false);
        }
      })
      .catch((err) => {
        console.log("err", err);
        reject(false);
      });
  });
};
export const calculateTimeLeft = (endDate) => {
  if (endDate) {
    let difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  } else {
    return false;
  }
};
