import { Button } from '@/components/Button';
import styles from './Error404.module.scss';
import { Header } from '@/components/Header';
import { TopHeader } from '@/components/TopHeader';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import clsx from 'clsx';

export const Error404: React.FC = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  };

  return (
    <>
      <TopHeader />
      <div className={styles.navbar}>
        <Header />
      </div>
      <main className={clsx('container', styles.mainContent)}>
        <div className={styles.link}>
          <Link to='/' className={styles.linkStyle}>
            Home
          </Link>
          <span className={styles.linkStyle}>/</span>
          <Link to='/error-404' className={styles.linkStyleActive}>
            404 Error
          </Link>
        </div>
        <div className={styles.notFound}>
          <h1>404 Not Found</h1>
          <p>Your visited page not found. You may go home page.</p>
          <div className={styles.button}>
            <Button color='primary' onClick={backToHome}>
              Back to home page
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
