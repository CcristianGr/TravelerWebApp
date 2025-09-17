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

type comentario = {
  postId:number;
  id:number;
  name: string;
  email:string;
  body:string
}

const API_BASE_URL = import.meta.env.VITE_API_JSON_PLACEHOLDER;

export async function getPostActiveCloseArea() {
  const response = await axios.get(`${API_BASE_URL}/comments/1`);
  return response.data;
}

export async function postUser(data:postUsuario) {
  const response = await axios.post(`${API_BASE_URL}/users`, data);
  return response.data;
}

export async function postComentario(data:comentario) {
  const response = await axios.post(`${API_BASE_URL}/comments`, data);
  return response.data;
}


 