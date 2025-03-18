import { useNavigate } from 'react-router-dom';
import styles from './TopHeader.module.scss';
import React from 'react';

export const TopHeader: React.FC = () => {
  const navigate = useNavigate();
  const shopNow = () => {
    navigate('/#products');
  };

  return (
    <header>
      <div className={styles.topHeader}>
        <div className={styles.wrapText}>
          <div className={styles.text}>
            <h3 className={styles.tittle}>
              Summer Sale For All Products And Free Express Delivery - OFF 50%!
            </h3>
            <span onClick={shopNow}>ShopNow</span>
          </div>
          <select>
            <option value='0'>English</option>
            <option value='1'>Indonesia</option>
          </select>
        </div>
      </div>
    </header>
  );
};
