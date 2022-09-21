import React, { createContext, useState, useCallback, useEffect } from "react";
import axios from "axios";
import { apiConfig } from "src/constants";

export const AuthContext = createContext();

export default function AuthProvider(props) {
  const [isLogin, setIsLogin] = useState(checkLogin());
  const [userData, setUserData] = useState();

  const setSession = async (accessToken) => {
    if (accessToken) {
      await localStorage.setItem("creatturAccessToken", accessToken);
      // axios.defaults.headers.common.Authorization = `${accessToken}`;
    } else {
      localStorage.removeItem("creatturAccessToken");
      // delete axios.defaults.headers.common.Authorization;
    }
  };

  function checkLogin() {
    const accessToken = window.localStorage.getItem("userAddress");
    return accessToken ? true : false;
  }

  const getMyAccount = useCallback(async () => {
    const accessToken = window.localStorage.getItem("userAddress");
    try {
      const response = await axios.get(apiConfig.getProfile, {
        headers: {
          authorization: `JWT ${accessToken}`,
        },
      });
      if (response.status !== 200) {
        setUserData();
      } else {
        setUserData(response.data);
      }
    } catch (err) {
      console.error(err.response);
      setUserData();
      setSession(null);
      setIsLogin(false);
    }
  }, []);

  useEffect(() => {
    const accessToken = window.localStorage.getItem("creatturAccessToken");
    if (accessToken) {
      getMyAccount();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  let data = {
    userLoggedIn: isLogin,
    userData,
    userLogIn: (type, data) => {
      setSession(data);
      setIsLogin(type);
      getMyAccount();
    },
    getProfile: () => {
      getMyAccount();
    },
  };

  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
}
