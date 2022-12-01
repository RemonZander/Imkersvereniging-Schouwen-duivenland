import axios from 'axios';
import {AgendaResponseInterface} from "../interfaces/AgendaResponseInterface";
axios.defaults.baseURL = "http://localhost:5000"

export const agenda = async (): Promise<AgendaResponseInterface> => {
    return new Promise((resolve, reject) => {
        axios.get('/agenda').then(response => {
            const data: AgendaResponseInterface = response.data.agenda;
            resolve(data);
        }).catch(err => {
            reject(err);
        })
    })
}