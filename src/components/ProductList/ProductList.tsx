import styles from './ProductList.module.scss';
import React, { useEffect } from 'react';
import { CardProduct } from '@/components/CardProduct';
import { useAppDispatch } from '@/redux/hooks';
// import { useDialog } from '@/context/DialogContext';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { fetchProductsThunk } from '@/redux/productSlice';
import { useToast } from '@/context/ToastContext';
import { addDirectCheckout, addToCart } from '@/redux/cartSlice';
import { Loader } from '../Loader';
import { Product } from '@/types/product';
import { CartItemProps } from '@/types/cart';
import { useNavigate } from 'react-router-dom';

export const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  // const setDialog = useDialog();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  const { addToast } = useToast();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  const handleAddToCart = (product: Product) => {
    const cartItem: CartItemProps = {
      ...product,
      quantity: 1,
      selected: false,
    };
    dispatch(addToCart(cartItem));

    addToast({
      variant: 'information',
      message: `Success add to cart for ${product.title} `,
      onClose: () => {},
    });
  };

  const handleGoToDetail = (product: Product) => {
    const cartItem: CartItemProps = {
      ...product,
      quantity: 1,
    };
    dispatch(addDirectCheckout(cartItem));
    navigate(`/product/${product.id}`);
  };

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.productsGrid}>
      {products.map((product: Product) => (
        <CardProduct
          key={product.id}
          {...product}
          onAddToCart={() => handleAddToCart(product)}
          onGoToDetail={() => handleGoToDetail(product)}
        />
      ))}
    </div>
  );
};
