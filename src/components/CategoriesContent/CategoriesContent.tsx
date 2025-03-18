import styles from './CategoriesContent.module.scss';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RootState } from '@/redux/store';
import { useAppDispatch } from '@/redux/hooks';
import { fetchProductByCategoryName } from '@/redux/productSlice';
import { TopHeader } from '../TopHeader';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { CardProduct } from '../CardProduct';
import { useToast } from '@/context/ToastContext';
import { Product } from '@/types/product';
import { addToCart } from '@/redux/cartSlice';
import { Loader } from '../Loader';

export const CategoriesContent: React.FC = () => {
  const { categoryName } = useParams<{
    categoryName: string;
    subCategoryName?: string;
  }>();
  const dispatch = useAppDispatch();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const { productsCategory, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  const handleAddToCart = (product: Product) => {
    const cartItem = {
      ...product,
      quantity: 1,
      selected: false,
    };
    dispatch(addToCart(cartItem));

    addToast({
      variant: 'information',
      message: `Success add to cart for ${product.title} `,
      onClose: () => {},
    });
  };

  const handleGoToDetail = (id: number) => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    if (categoryName) {
      // console.log('Fetching products for category:', categoryName);
      dispatch(fetchProductByCategoryName(categoryName));
    }
  }, [categoryName, dispatch]);

  // const fillteredCategory =

  if (loading) return <Loader />;
  if (error) return <div>{error}</div>;

  return (
    <>
      <TopHeader />
      <div className={styles.navbar}>
        <Header />
      </div>
      <main className={styles.mainContent}>
        <div className={styles.link}>
          <Link to='/#products' className={styles.linkStyle}>
            Products
          </Link>
          <span className={styles.linkStyle}>/</span>
          <Link to='/#categories' className={styles.linkStyleActive}>
            {categoryName}
          </Link>
        </div>
        <div className={styles.products}>
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
          <div className={styles.title}>
            <div className={styles.boxAndTag}>
              <div className={styles.box}></div>
              <span className={styles.tag}>Categories</span>
            </div>
            <h3>Browse By Category</h3>
          </div>
          <div className={styles.productsGrid}>
            {productsCategory.length > 0 ? (
              productsCategory.map((product) => (
                <CardProduct
                  key={product.category}
                  {...product}
                  onAddToCart={() => handleAddToCart(product)}
                  onGoToDetail={() => handleGoToDetail(product.id)}
                />
              ))
            ) : (
              <p>Not found products by {categoryName}</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
