import axios from "axios";
 
const API_BASE_URL = import.meta.env.VITE_API_JSON_PLACEHOLDER;

export async function getPostActiveCloseArea() {
  const response = await axios.get(`${API_BASE_URL}/comments`);
  return response.data;
}

export async function postComment(data: { name: string; email: string }) {
  const response = await axios.post(`${API_BASE_URL}/comments`, data);
  return response.data;
}
 