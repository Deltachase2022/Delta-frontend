import axios from "axios";

const API_URL = "https://admin.deltachase.in/public/api";

const register = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

const login = async (userData) => {
  return await axios.post(`${API_URL}/login`, userData);
};

const getUser = async (token) => {
  return await axios.get(`${API_URL}/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

const logout = async (token) => {
  return await axios.post(
    `${API_URL}/logout`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export { register, login, getUser, logout };
