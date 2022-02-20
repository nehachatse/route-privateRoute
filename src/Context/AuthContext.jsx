import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  const [token, setToken] = React.useState("");
  const [user, setUser] = React.useState("");

  const handleAuth = (userName) => {
    console.log("Im here", isAuth);
    if (isAuth) {
      setIsAuth(false);
    } else {
      setUser(userName);
      setIsAuth(true);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuth, token, user, handleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
