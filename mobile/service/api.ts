import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.8:8080',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getData = async (endpoint: string) => {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        throw error;
    }
};

export const postData = async (endpoint: string, data: object) => {
    try {
        console.log('data: ', data)
        const response = await api.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Erro ao cadastrar glicemia', error);
        throw error;
    }
};
