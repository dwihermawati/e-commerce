import styles from './style.module.scss';
import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { TopHeader } from '@/components/TopHeader';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import clsx from 'clsx';

export const ContactPage: React.FC = () => {
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
      <div className={clsx('container', styles.notFound)}>
        <h1>Contact</h1>
        <div className={styles.button}>
          <Button color='primary' onClick={backToHome}>
            Back to home page
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};
