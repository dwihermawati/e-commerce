import styles from './DropDownCart.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItemCount, selectCartItems } from '@/redux/cartSlice';
import { Button } from '../Button';

export const DropDownCart: React.FC = () => {
  const navigate = useNavigate();
  const goToCart = () => {
    navigate('/cart');
  };

  const cartItemCount = useSelector(selectCartItemCount);
  const cartItems = useSelector(selectCartItems);

  const [isCartHover, setIsCartHover] = useState(false);
  const handleMouseEnter = () => {
    setIsCartHover(true);
  };
  const handleMouseLeave = () => {
    setIsCartHover(false);
  };

  const goToShopping = () => {
    navigate('/#products');
  };

  const handleGoToDetail = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className={styles.cartIcon}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src='/assets/Icons/cart.svg'
        alt='cart'
        className={styles.image}
        onClick={goToCart}
      />
      {cartItems.length >= 1 ? (
        <span className={styles.itemCount}>{cartItemCount}</span>
      ) : (
        <div></div>
      )}

      {isCartHover && (
        <>
          <div className={styles.triangle}></div>
          {cartItems.length === 0 ? (
            <div className={styles.emptyItems}>
              <img src='/assets/Images/empty-state-pp.svg' alt='emphtyCart' />
              <h2>Your shopping cart is empty</h2>
              <p>Come on, fill it with the items of your dreams!</p>
              <Button color='primary' onClick={goToShopping}>
                Start Shopping
              </Button>
            </div>
          ) : (
            <>
              <div className={styles.triangle}></div>
              <div className={styles.dropdownItemWrapper}>
                <div className={styles.header}>
                  <p className={styles.titleHeader}>Cart ({cartItemCount})</p>
                  <Link to='/cart' className={styles.link}>
                    See All
                  </Link>
                </div>
                <div className={styles.boxScroll}>
                  <div className={styles.dropdownItem}>
                    {cartItems.map((item) => (
                      <li key={item.id} className={styles.list}>
                        <div className={styles.boxImage}>
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className={styles.titleAndPrice}>
                          <p
                            className={styles.itemTitle}
                            onClick={() => handleGoToDetail(item.id)}
                          >
                            {item.title}
                          </p>
                          <span className={styles.itemPrice}>
                            ${item.price}
                          </span>
                        </div>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};
