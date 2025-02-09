/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getProfile, getToken, logout } from "../services/authService";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(
    getToken() ? true : false
  );

  useEffect(() => {
    const token = getToken();
    console.log(token);
    if(token)
    fetchUserData(token);
    console.log(user);
    setIsAuthenticated(token ? true : false);
  }, [isAuthenticated]);
  const fetchUserData = async (token) => {
    try {
      const data = getProfile(token)
      setUser(data)
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const handleLogout = () => {
    logout();
    setUser({})
    localStorage.removeItem('token')
    setIsAuthenticated(false);
  };

 

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, handleLogout,user,setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
