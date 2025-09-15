import axios from "axios";

type postUsuario = {
    id: string;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        cathPhrase: string;
        bs: string;
    };
}

const API_BASE_URL = import.meta.env.VITE_API_JSON_PLACEHOLDER;

export async function getPostActiveCloseArea() {
  const response = await axios.get(`${API_BASE_URL}/comments`);
  return response.data;
}

export async function postComment(data:postUsuario) {
  const response = await axios.post(`${API_BASE_URL}/users`, data);
  return response.data;
}
 