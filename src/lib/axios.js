import axios from 'axios';

const instance = axios.create({ baseURL: process.env.LOCAL_STRAPI_BASE_URI });

export default instance;
