import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const authInfo = {
    name: "chup haram",
  };
  return (
 
      <AuthContext value={authInfo}>{children}</AuthContext>
   
  );
};

export default AuthProvider;
