import { customAxios } from './index';

export const fetchProducts = async () => {
  try {
    const resp = await customAxios.get('/products');
    return resp.data;
  } catch (err) {
    console.error('Error fetching products:', err);
    throw err;
  }
};
