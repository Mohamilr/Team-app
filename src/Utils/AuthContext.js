import React, { createContext } from "react";

export const auth = createContext();

const AuthProvider = ({ children }) => {
  const Authenticate = (data) => {
    switch (data.type) {
      case "set-auth":
        localStorage.setItem("auth-data", data.AuthData);
        break;
        default:
            return data;
    }
  };
  return <auth.Provider value={[Authenticate]}>{children}</auth.Provider>;
};

export default AuthProvider;
