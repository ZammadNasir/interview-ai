import { createContext, useEffect, useState } from "react";
import { getMe } from "./services/auth.api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);


  const auth = {
    user,
    setUser,
    loading,
    setLoading,
  };

    return (<AuthContext.Provider value={auth}>{children}</AuthContext.Provider>);
}