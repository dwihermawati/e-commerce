import { useNavigate } from 'react-router-dom';
import styles from './DropDownUser.module.scss';
import React from 'react';

export const DropDownUser: React.FC = () => {
  const navigate = useNavigate();
  const notFound = () => {
    navigate('/error-404');
  };

  return (
    <div className={styles.wrapIconUser}>
      <img
        className={styles.userIcon}
        src='/assets/Icons/user.svg'
        alt='user'
      />
      <div className={styles.dropdownUser}>
        <ul>
          <li onClick={notFound}>
            <img src='/assets/Icons/user-white.svg' alt='user' />
            <a href='#'>Manage My Account</a>
          </li>
          <li onClick={notFound}>
            <img src='/assets/Icons/mallBag.svg' alt='myOrder' />
            <a href='#'>My Order</a>
          </li>
          <li onClick={notFound}>
            <img src='/assets/Icons/cancelIcon.svg' alt='cancel' />
            <a href='#'>My Cancellations</a>
          </li>
          <li onClick={notFound}>
            <img src='/assets/Icons/reviewIcon.svg' alt='review' />
            <a href='#'>My Reviews</a>
          </li>
          <li onClick={notFound}>
            <img src='/assets/Icons/logoutIcon.svg' alt='logout' />
            <a href='#'>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
