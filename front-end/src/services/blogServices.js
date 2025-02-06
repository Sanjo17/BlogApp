import axios from "axios";

const API_URL = "http://localhost:5000/api/blogs"; // Use environment variable for API URL

// Get all blogs
export const getBlogs = async () => {
    try {
      const response = await axios.get(`${API_URL}/getBlogs`,{headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }});
      
      return response.data.data;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  };

// Get user-created blogs
export const getUserBlogs = async () => {
  try {
    const response = await axios.get(`${API_URL}/getUserBlogs`,{headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }});
    return response.data.data;
  } catch (error) {
    console.error("Error fetching user blogs:", error);
    throw error;
  }
};

// Create a new blog post
export const createBlog = async (postData, token) => {
  try {
    const response = await axios.post(`${API_URL}/createBlog`, postData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating blog:", error);
    throw error;
  }
};
