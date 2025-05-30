import clsx from 'clsx';
import styles from './Footer.module.scss';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate('/#home');
  };
  return (
    <div className={styles.footer}>
      <div className={clsx('container', styles.footerContainer)}>
        <div className={styles.footerContent}>
          <div className={styles.frame1}>
            <div className={styles.headerFrame1}>
              <div className={styles.logoTitle}>
                <img
                  src='/assets/Images/logo-shopzone-putih.svg'
                  alt='logo'
                  onClick={home}
                />
                <Link to='/contact#contactUs' className={styles.link}>
                  Subscribe
                </Link>
              </div>
              <p>Get 10% off your first order</p>
            </div>
            <div className={styles.inputIcon}>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter your email'
                // value={email}
              />
              <img src='/assets/Icons/send.svg' alt='send email' />
            </div>
          </div>
          <div className={styles.frame2}>
            <h3>Support</h3>
            <div className={styles.address}>
              <p>WPH Ahademy 191, Jakarta</p>
              <p>shopzonefake@gmail.com</p>
              <a
                href='https://wa.me/6285892599073?text=Assalamualaikum%20Mba%20Dwi'
                target='_blank'
                rel='noopener noreferrer'
              >
                +62-858-9259-9073 (WhatsApp)
              </a>
            </div>
          </div>
          <div className={styles.frame3}>
            <h3>Account</h3>
            <ul>
              <li>
                <Link to='/#home' className={styles.link}>
                  My Account
                </Link>
              </li>
              <li>
                <Link to='/#home' className={styles.link}>
                  Login / Register
                </Link>
              </li>
              <li>
                <Link to='/cart' className={styles.link}>
                  Cart
                </Link>
              </li>
              <li>
                <Link to='/wishlist' className={styles.link}>
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to='/#products' className={styles.link}>
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.frame4}>
            <h3>Quick Link</h3>
            <ul>
              <li>
                <Link to='/error-404#not-found' className={styles.link}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to='/error-404#not-found' className={styles.link}>
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link to='/error-404#not-found' className={styles.link}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to='/contact#contactUs' className={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.frame5}>
            <div className={styles.wrapDownload}>
              <h3>Download App</h3>
              <div className={styles.mapIconDownload}>
                <p>Save $3 with App New User Only</p>
                <img src='/assets/Images/download-barcode.png' alt='barcode' />
              </div>
            </div>
            <div className={styles.iconSosmed}>
              <a
                href='https://www.facebook.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='/assets/Icons/facebook.svg'
                  alt='Facebook Icon'
                  className={styles.icon}
                />
              </a>
              <a
                href='https://www.twitter.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='/assets/Icons/twitter.svg'
                  alt='Twitter Icon'
                  className={styles.icon}
                />
              </a>
              <a
                href='https://www.instagram.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='/assets/Icons/instagram.svg'
                  alt='Instagram Icon'
                  className={styles.icon}
                />
              </a>
              <a
                href='https://www.linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='/assets/Icons/linkin.svg'
                  alt='LinkedIn Icon'
                  className={styles.icon}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.copyrightContent}>
          <img src='/assets/Icons/copyright.svg' alt='copyright' />
          <p>Copyright by Dwi Hermawati. All right reserved</p>
        </div>
      </div>
    </div>
  );
};
