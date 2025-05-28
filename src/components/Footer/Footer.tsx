import clsx from 'clsx';
import styles from './Footer.module.scss';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={clsx('container', styles.footerContainer)}>
        <div className={styles.footerContent}>
          <div className={styles.frame1}>
            <div className={styles.headerFrame1}>
              <div className={styles.logoTitle}>
                <img src='/assets/Images/logo-shopzone-putih.svg' alt='logo' />
                <a href='#'>Subscribe</a>
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
              <a href='https://wa.me/6285892599073?text=Assalamualaikum%20Mba%20Dwi'>
                +62-858-9259-9073 (WhatsApp)
              </a>
            </div>
          </div>
          <div className={styles.frame3}>
            <h3>Account</h3>
            <ul>
              <li>
                <a href='#'>My Account</a>
              </li>
              <li>
                <a href='#'>Login / Register</a>
              </li>
              <li>
                <a href='#'>Cart</a>
              </li>
              <li>
                <a href='#'>Wishlist</a>
              </li>
              <li>
                <a href='#'>Shop</a>
              </li>
            </ul>
          </div>
          <div className={styles.frame4}>
            <h3>Quick Link</h3>
            <ul>
              <li>
                <a href='#'>Privacy Policy</a>
              </li>
              <li>
                <a href='#'>Terms Of Use</a>
              </li>
              <li>
                <a href='#'>FAQ</a>
              </li>
              <li>
                <a href='#'>Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.frame5}>
            <div className={styles.wrapDownload}>
              <h3>Download App</h3>
              <div className={styles.mapIconDownload}>
                <p>Save $3 with App New User Only</p>
                <img
                  src='/assets/Images/download-barcode.png'
                  alt='fake image'
                />
              </div>
            </div>
            <div className={styles.iconSosmed}>
              <img src='/assets/Icons/facebook.svg' alt='Facebook Icon' />
              <img src='/assets/Icons/twitter.svg' alt='twitter Icon' />
              <img src='/assets/Icons/instagram.svg' alt='instagram Icon' />
              <img src='/assets/Icons/linkin.svg' alt='linked in Icon' />
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
