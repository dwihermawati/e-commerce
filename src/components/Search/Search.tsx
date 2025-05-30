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
import clsx from 'clsx';

export const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') || searchQuery;

  const exploreOurProducts = () => {
    navigate('/#products');
  };

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
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
      <main className={clsx('container', styles.mainContent)}>
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

        <div className={styles.productsGridSearch}>
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
                We couldn’t find any products matching your search. Try
                adjusting your search criteria or explore our products
                {/* <span className={styles.searchQuery}>`{searchQuery}`</span> */}
              </p>
              <Button color='primary' onClick={exploreOurProducts}>
                Explore Our Products
              </Button>
            </div>
          )}
          {/* <div className={styles.boxAndTag}>
            <div className={styles.box}></div>
            <span className={styles.tagSearch}>Might You Like</span>
            <ProductList />
          </div> */}
        </div>
      </main>
      <Footer />
    </>
  );
};
