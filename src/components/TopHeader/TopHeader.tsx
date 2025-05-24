import { useNavigate } from 'react-router-dom';
import styles from './TopHeader.module.scss';
import React from 'react';
import clsx from 'clsx';

export const TopHeader: React.FC = () => {
  const navigate = useNavigate();
  const shopNow = () => {
    navigate('/#products');
  };

  return (
    <header>
      <div className={clsx('container', styles.topHeader)}>
        <div className={styles.text}>
          <p className={styles.tittle}>
            Summer Sale For All Products And Free Express Delivery - OFF 50%!
          </p>
          <span onClick={shopNow}>ShopNow</span>
        </div>
        <select>
          <option value='0' className={styles.option}>
            English
          </option>
          <option value='1' className={styles.option}>
            Indonesia
          </option>
        </select>
      </div>
    </header>
  );
};
