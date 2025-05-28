import styles from './Home.module.scss';
import { Banner } from '@/components/CategoriesDropDown';
import { Header } from '@/components/Header';
import { TopHeader } from '@/components/TopHeader';
import React, { useEffect } from 'react';
import { Footer } from '@/components/Footer';
import { ProductList } from '@/components/ProductList';
import clsx from 'clsx';

export const Home: React.FC = () => {
  useEffect(() => {
    if (location.hash === '#products') {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });

  return (
    <>
      <TopHeader />
      <div className={styles.navbar} id='/'>
        <Header />
      </div>
      {/* <div id='categories'> */}
      <Banner />
      {/* </div> */}
      <main className={clsx('container', styles.mainContent)}>
        <div className={styles.products} id='products'>
          <div className={styles.title}>
            <div className={styles.boxAndTag}>
              <div className={styles.box}></div>
              <span>Our Products</span>
            </div>
            <h3>Explore Our Products</h3>
          </div>
          <ProductList />
        </div>
      </main>
      <Footer />
    </>
  );
};
