/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getToken, logout } from "../services/authService";
import axios from "axios";

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
      const res = await axios.get(`http://localhost:5000/api/auth/profile`, {
        headers: { Authorization: token },
      });
      setUser(res.data)
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
