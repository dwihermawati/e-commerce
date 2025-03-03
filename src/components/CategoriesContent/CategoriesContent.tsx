import styles from './CategoriesContent.module.scss';
import React from 'react';
import { TopHeader } from '../TopHeader';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useAppDispatch } from '@/redux/hooks';

export const CategoriesContent: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useAppDispatch();

  // const handleChooseByCategory =

  return (
    <>
      <TopHeader />
      <div className={styles.navbar}>
        <Header />
      </div>
      <main className={styles.mainContent}>
        <div className={styles.products}>
          <div className={styles.title}>
            <div className={styles.boxAndTag}>
              <div className={styles.box}></div>
              <span className={styles.tag}>Categories</span>
            </div>
            <h3>Browse By Category</h3>
          </div>
          <div className={styles.browseByCategory}>
            <div className={styles.boxCategory}>
              <img src='/assets/Icons/imageByCategory.svg' alt='category' />
              <span className={styles.category}>Womens Clothing</span>
            </div>
            <div className={styles.boxCategory}>
              <img src='/assets/Icons/imageByCategory.svg' alt='category' />
              <span className={styles.category}>Mens Clothing</span>
            </div>
            <div className={styles.boxCategory}>
              <img src='/assets/Icons/imageByCategory.svg' alt='category' />
              <span className={styles.category}>Electronics</span>
            </div>
            <div className={styles.boxCategory}>
              <img src='/assets/Icons/imageByCategory.svg' alt='category' />
              <span className={styles.category}>Jewelery</span>
            </div>
            <div className={styles.boxCategory}>
              <img src='/assets/Icons/imageByCategory.svg' alt='category' />
              <span className={styles.category}>Lifestyle</span>
            </div>
            <div className={styles.boxCategory}>
              <img src='/assets/Icons/imageByCategory.svg' alt='category' />
              <span className={styles.category}>Sports</span>
            </div>
          </div>
          <div className={styles.productsGrid}>
            isi dengan semua produk, jika pengguna mengklik category maka
            tampilkan product berdasarkan category
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
