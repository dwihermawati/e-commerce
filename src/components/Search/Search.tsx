import styles from './Search.module.scss';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchProductsThunk } from '@/redux/productSlice';
import { CardProduct } from '@/components/CardProduct';
import { RootState } from '@/redux/store';
import { Loader } from '@/components/Loader';
import { addToCart } from '@/redux/cartSlice';
import { Product } from '@/types/product';
import { useAppDispatch } from '@/redux/hooks';
import { TopHeader } from '../TopHeader';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Button } from '../Button';

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );

  const backToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchProductsThunk());
    }
  }, [dispatch, searchQuery]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (product: Product) => {
    const cartItem = {
      ...product,
      quantity: 1,
      selected: false,
    };
    dispatch(addToCart(cartItem));
  };

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <TopHeader />
      <div className={styles.navbar}>
        <Header />
      </div>
      <main className={styles.mainContent}>
        <div className={styles.link}>
          <Link to='/' className={styles.linkStyle}>
            Home
          </Link>
          <span className={styles.linkStyle}>/</span>
          <Link to='/search' className={styles.linkStyleActive}>
            Search
          </Link>
        </div>

        <h2 className={styles.title}>
          Search Results for {'   '}
          <span className={styles.searchQuery}>`{searchQuery}`</span>
        </h2>

        <div className={styles.productsGrid}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <CardProduct
                key={product.id}
                {...product}
                onAddToCart={() => handleAddToCart(product)}
                onGoToDetail={() => navigate(`/product/${product.id}`)}
              />
            ))
          ) : (
            <div className={styles.noFoundProduct}>
              <p className={styles.title}>
                No products found for {'   '}
                <span className={styles.searchQuery}>`{searchQuery}`</span>
              </p>
              <Button color='primary' onClick={backToHome}>
                Back To Home
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};
