import axios from 'axios';

const API_URL = '/api/auth';

export const registerUser = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/register`, { username, password });
  return response.data;
};

export const loginUser = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};
