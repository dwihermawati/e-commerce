import { Button } from '@/components/Button';
import styles from './ProductDetails.module.scss';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Loader } from '@/components/Loader';
import { RatingCount } from '@/components/Rating';
import { TopHeader } from '@/components/TopHeader';
import { useAppDispatch } from '@/redux/hooks';
import {
  fetchProductDetailById,
  fetchProductsThunk,
} from '@/redux/productSlice';
import { RootState } from '@/redux/store';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { QuantityInput } from '@/components/QuantityInput';
import { WishlistButton } from '@/components/WishlistButton';
import { CardProduct } from '../CardProduct';
import { Product } from '@/types/product';
import { CartItemProps } from '@/types/cart';
import { addToCart } from '@/redux/cartSlice';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = Number(id);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { productDetail, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  const products = useSelector((state: RootState) => state.products.products);

  const categorySame = productDetail?.category;
  const relatedProducts = products.filter(
    (product) => product.category === categorySame && product.id !== productId
  );

  const handleAddToCart = (product: Product) => {
    const cartItem: CartItemProps = {
      ...product,
      quantity: 1,
      selected: false,
    };
    dispatch(addToCart(cartItem));
  };

  const handleGoToCheckout = () => {
    if (productDetail && productDetail.quantity > 0) {
      navigate('/checkout', {
        state: { productId, quantity: productId },
      });
    } else {
      alert('Minimum purchase of this product is 1 item');
    }
  };

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProductsThunk());
    }
    dispatch(fetchProductDetailById(productId));
  }, [dispatch, productId, products.length]);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!productDetail) return <p>Product not found</p>;

  const {
    image,
    title,
    description,
    price,
    category,
    rating: { rate, count },
  } = productDetail;

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
          <Link to='/#categories' className={styles.linkStyle}>
            {category}
          </Link>
          <span className={styles.linkStyle}>/</span>
          <p className={styles.tag}>{title}</p>
        </div>

        <div className={styles.contentWrap}>
          <div className={styles.boxImageDetail}>
            <img src={image} alt={title} className={styles.imageDetail} />
          </div>
          <div className={styles.detail}>
            <div className={styles.containProductDetail}>
              <h3>{title}</h3>
              <RatingCount rate={rate} count={count} />
              <p className={styles.price}>${price}</p>
              <p className={styles.descriptionProduct}>{description}</p>
            </div>
            <div className={styles.action}>
              <QuantityInput
                id={productDetail.id}
                quantity={productDetail.quantity}
              />
              <Button color='primary' onClick={handleGoToCheckout}>
                Buy Now
              </Button>
              <div className={styles.wishlist}>
                <WishlistButton product={productDetail} />
              </div>
              <img src='/assets/Images/free-delivery.svg' alt='free delivery' />
            </div>
          </div>
        </div>

        <div className={styles.relatedProducts}>
          <div className={styles.boxAndTag}>
            <div className={styles.box}></div>
            <span className={styles.tagRelatedProduct}>Related Item</span>
          </div>
          <div className={styles.productsGrid}>
            {relatedProducts.map((product) => (
              <CardProduct
                key={product.id}
                {...product}
                onAddToCart={() => handleAddToCart(product)}
                onGoToDetail={() => navigate(`/product/${product.id}`)}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
