import axios from 'axios';

// Criar api para padrao da pagina para ser usada 
export const  Api = axios.create({
    baseURL: 'http://localhost:8001'
})