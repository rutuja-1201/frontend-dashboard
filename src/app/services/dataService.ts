import axios from 'axios';

const API_URL = '/api/data';

export const uploadDataset = async (file: File) => {
  const formData = new FormData();
  formData.append('dataset', file);

  const response = await axios.post(`${API_URL}/upload`, formData);
  return response.data;
};
