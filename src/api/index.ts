import axios from 'axios';
import { APIConfiguration } from '@/configs/api.config';

export const customAxios = axios.create({
  baseURL: APIConfiguration.baseURL,
});
