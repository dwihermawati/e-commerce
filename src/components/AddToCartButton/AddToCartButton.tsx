import styles from './AddToCartButton.module.scss';
import React from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { useToast } from '@/context/ToastContext';
import { addToCart } from '@/redux/cartSlice';
import { Product } from '@/types/product';

interface AddToCartButtonProps {
  product: Product;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
}) => {
  const dispatch = useAppDispatch();
  const { addToast } = useToast();

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      quantity: 1,
      selected: false,
    };
    dispatch(addToCart(cartItem));

    addToast({
      variant: 'information',
      message: `${product.title} successfully added to cart`,
      onClose: () => {},
    });
  };

  return (
    <button
      className={styles.addToCartButton}
      onClick={handleAddToCart}
      style={{ cursor: 'pointer' }}
    >
      Add To Cart
    </button>
  );
};
