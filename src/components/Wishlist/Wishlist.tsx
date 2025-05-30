import styles from './Wishlist.module.scss';
import { useAppDispatch } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import { TopHeader } from '../TopHeader';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Button } from '../Button';
import { Link, useNavigate } from 'react-router-dom';
import { WishlistProps } from '@/types/wishlistProps';
import { CartItemProps } from '@/types/cart';
import { addToCart } from '@/redux/cartSlice';
import {
  removeFromWishlist,
  moveAllToBag,
  selectWishlistItemCount,
} from '@/redux/wishlistSlice';
import { CardProduct } from '../CardProduct';
import { Product } from '@/types/product';
import { useToast } from '@/context/ToastContext';
import clsx from 'clsx';

export const Wishlist: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  const categoriesInWishlist = wishlistItems.map((item) => item.category);
  const relatedProducts = products.filter((product) =>
    categoriesInWishlist.includes(product.category)
  );

  const productCategories = [
    ...new Set(products.map((product) => product.category)),
  ];
  const ifDoesNotProductInWishlist = productCategories
    .map((category) => {
      return products.find((product) => product.category === category);
    })
    .filter(Boolean);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  };
  const seeAll = () => {
    navigate('/#products');
  };

  const { addToast } = useToast();
  const handleAddToCart = (product: WishlistProps) => {
    const cartItem: CartItemProps = {
      ...product,
      quantity: 1,
      selected: false,
    };
    dispatch(addToCart(cartItem));

    addToast({
      variant: 'information',
      message: `Success add to cart for ${product.title}`,
      onClose: () => {},
    });
  };

  const handleMoveAllToBag = () => {
    wishlistItems.forEach((item) => {
      const cartItem: CartItemProps = {
        ...item,
        quantity: 1,
        selected: false,
      };
      dispatch(addToCart(cartItem));
    });
    if (wishlistItemCount) {
      dispatch(moveAllToBag());
      addToast({
        variant: 'information',
        message: `All Products in Wishlist, Success add to cart`,
        onClose: () => {},
      });
    }
  };

  const handleRemoveItemWishlist = (id: number) => {
    dispatch(removeFromWishlist(id));

    addToast({
      variant: 'danger',
      message: 'Item has been removed from wishlist',
      onClose: () => {},
    });
  };

  const handleGoToDetail = (id: number) => {
    navigate(`/product/${id}`);
  };

  const wishlistItemCount = useSelector(selectWishlistItemCount);

  return (
    <>
      <TopHeader />
      <div className={styles.navbar}>
        <Header />
      </div>

      <main className={clsx('container', styles.mainContent)}>
        <div className={styles.link}>
          <Link to='/' className={styles.linkStyleHome}>
            Home
          </Link>
          <span className={styles.linkStyleHome}>/</span>
          <Link to='/wishlist' className={styles.linkStyle}>
            Wishlist
          </Link>
        </div>
        <div className={styles.tag}>
          <span>Wishlist ({wishlistItemCount})</span>
          <div
            className={styles.boxMoveToBagButton}
            onClick={handleMoveAllToBag}
          >
            Move All To Bag
          </div>
        </div>
        {wishlistItems.length === 0 ? (
          <div className={styles.emptyDisplay}>
            <img src='/assets/Images/empty-state-pp.svg' alt='' />
            <p>Wishlist is empty</p>
            <Button color='primary' onClick={backToHome}>
              Back To Home
            </Button>
          </div>
        ) : (
          <ul className={styles.list}>
            {wishlistItems.map((item) => (
              <li key={item.id} className={styles.card}>
                <div className={styles.backgroundImage}>
                  <img
                    src='/assets/Icons/remove.svg'
                    alt='remove from wishlist'
                    className={styles.remove}
                    onClick={() => handleRemoveItemWishlist(item.id)}
                  />
                  <div
                    className={styles.boxImage}
                    onClick={() => handleGoToDetail(item.id)}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.image}
                    />
                  </div>
                  <button
                    className={styles.addToCartButton}
                    onClick={() => handleAddToCart(item)}
                  >
                    Add To Cart
                  </button>
                </div>
                <div
                  className={styles.cardContent}
                  onClick={() => handleGoToDetail(item.id)}
                >
                  <h3>{item.title}</h3>
                  <p className={styles.category}>{item.category}</p>
                  <p className={styles.price}>${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.relatedProducts}>
          <div className={styles.title}>
            <div className={styles.boxAndTag}>
              <div className={styles.box}></div>
              <span className={styles.tagRelatedProduct}>Just For You</span>
            </div>
            <div className={styles.boxSeeAll} onClick={seeAll}>
              See All
            </div>
          </div>

          <div className={styles.productsGrid}>
            {relatedProducts.length > 0 ? (
              relatedProducts.map((product) => (
                <CardProduct
                  key={product.id}
                  {...product}
                  onAddToCart={() => handleAddToCart(product)}
                  onGoToDetail={() => handleGoToDetail(product.id)}
                />
              ))
            ) : ifDoesNotProductInWishlist.length > 0 ? (
              ifDoesNotProductInWishlist
                .filter(
                  (productCategories): productCategories is Product =>
                    productCategories !== undefined
                )
                .map((productCategories: Product) => (
                  <CardProduct
                    key={productCategories.id}
                    {...productCategories}
                    onAddToCart={() => handleAddToCart(productCategories)}
                    onGoToDetail={() => handleGoToDetail(productCategories.id)}
                  />
                ))
            ) : (
              <p className={styles.noProductRelated}>
                No related products found
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
