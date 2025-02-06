import axios from 'axios';
import { jwtDecode } from "jwt-decode";
const API_URL = ' http://localhost:5000/api/auth';

// Register User
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  localStorage.setItem('token', response.data.token);
  return response.data;
};

// Login User
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  
  localStorage.setItem('token', response.data.token);
  return response.data;
};

// Logout User
export const logout = () => {
  localStorage.removeItem('token');
};

// Get token
export const getToken = () => {
  return localStorage.getItem('token');
};
export const getUserFromToken = (token) => {
  if (!token) return null;
  try {
    return jwtDecode(token); // Extracts user data from the token
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};




