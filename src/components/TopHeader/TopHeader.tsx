import styles from './TopHeader.module.scss';
import React from 'react';

export const TopHeader: React.FC = () => {
  return (
    <header>
      <div className={styles.topHeader}>
        <div className={styles.wrapText}>
          <div className={styles.text}>
            <h3 className={styles.tittle}>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h3>
            <span>
              <a href='#home'>ShopNow</a>
            </span>
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
