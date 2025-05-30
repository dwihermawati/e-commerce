import styles from './style.module.scss';
import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { TopHeader } from '@/components/TopHeader';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import clsx from 'clsx';

export const SignUpPage: React.FC = () => {
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
      <main className={clsx('container', styles.mainContent)} id='signIn'>
        <div className={styles.notFound}>
          <h1>Sign Up</h1>
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
