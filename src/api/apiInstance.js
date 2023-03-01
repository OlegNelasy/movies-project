import axios from 'axios';

export const apiInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {'Content-Type': 'application/json/'},
    params: {api_key: process.env.REACT_APP_API_KEY}
});