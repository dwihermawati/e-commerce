import styles from './Hamburger.module.scss';
import React, { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

export const Hamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.hamburger} onClick={toggleMenu}>
      <img
        src='/assets/Icons/hamburger-menu-svgrepo-com.svg'
        alt='hamburger menu'
      />
      <div className={clsx(styles.dropDownNav, isOpen && styles.open)}>
        <ul>
          <li onClick={handleLinkClick}>
            <Link to='/' className={styles.link}>
              Home
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link to='/contact' className={styles.link}>
              Contact
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link to='/about' className={styles.link}>
              About
            </Link>
          </li>
          <li onClick={handleLinkClick}>
            <Link to='/signUp' className={styles.link}>
              SignUp
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
