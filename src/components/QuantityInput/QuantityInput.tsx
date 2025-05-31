import styles from './QuantityInput.module.scss';
import {
  decreaseQuantity,
  increaseQuantity,
  updateQuantity,
} from '@/redux/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

export type QuantityInputProps = {
  id: number;
  quantity: number;
  directCheckout?: boolean;
  size?: 'small' | 'large';
};

export const QuantityInput: React.FC<QuantityInputProps> = ({
  id,
  quantity,
  directCheckout = false,
  size = 'small',
}) => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>('');
  const [currentQuantity, setCurrentQuantity] = useState<number>(quantity);

  const handleIncrease = () => {
    setCurrentQuantity((prev) => prev + 1);
    dispatch(
      increaseQuantity({ id, quantity: currentQuantity, directCheckout })
    );
    setError('');
  };

  const handleDecrease = () => {
    if (currentQuantity > 1) {
      setCurrentQuantity((prev) => prev - 1);
      dispatch(
        decreaseQuantity({ id, quantity: currentQuantity, directCheckout })
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = e.target.value;
    const quantity = parseInt(newQuantity, 10);

    if (newQuantity === '' || quantity === 0) {
      setCurrentQuantity(0);
      dispatch(updateQuantity({ id, quantity: 0 }));
      setError('Quantity cannot be zero or empty');
    } else if (isNaN(quantity)) {
      setError('Please enter a valid number');
    } else {
      setError('');
      setCurrentQuantity(quantity);
      dispatch(updateQuantity({ id, quantity: quantity }));
    }
  };

  useEffect(() => {
    setCurrentQuantity(quantity);
  }, [quantity]);

  return (
    <div className={clsx(styles.content, styles[size])}>
      <div className={styles.decrease} onClick={handleDecrease}>
        <div
          className={clsx(
            styles.decreaseButton,
            currentQuantity <= 1 && styles.disabled
          )}
        ></div>
      </div>
      <div className={styles.input}>
        <input
          type='number'
          value={currentQuantity === 0 ? 0 : currentQuantity}
          onChange={handleChange}
          min='1'
        />
      </div>
      <div className={styles.increase} onClick={handleIncrease}>
        <img
          src='/assets/Icons/plus.svg'
          alt=''
          className={styles.increaseButton}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
