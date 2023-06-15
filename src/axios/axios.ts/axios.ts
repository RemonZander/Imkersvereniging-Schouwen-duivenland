import axios from 'axios';

import { 
    AxiosInstance,
} from 'axios';

const request: AxiosInstance = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    responseEncoding: 'utf8',
    responseType: 'json',
});

export default request;
