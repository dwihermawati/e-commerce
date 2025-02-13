import { Product } from '@/types/product';
import { useEffect, useState } from 'react';
import { fetchProducts } from '@/api/products';

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await fetchProducts();
        setProducts(Array.isArray(products) ? products : []);
        // setProducts(products);

        setLoading(false);
      } catch {
        setError('Failed to fetch products');
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  return { products, loading, error };
};
export default useFetchProducts;
