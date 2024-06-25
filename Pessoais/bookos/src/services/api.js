import axios from 'axios';

const api_key = 'SUA_CHAVE_DE_API_AQUI';
const baseURL = 'https://www.googleapis.com/books/v1';

const api = axios.create({
    baseURL,
    params: {
        key: api_key,
        langRestrict: 'pt-BR', // livros em português
    },
});

export default api;
