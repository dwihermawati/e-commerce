import styles from './DropDownWishlist.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectWishlistItemCount,
  selectWishlistItems,
} from '@/redux/wishlistSlice';

export const DropDownWishlist: React.FC = () => {
  const navigate = useNavigate();
  const goToWishlist = () => {
    navigate('/wishlist');
  };

  const wishlistItemCount = useSelector(selectWishlistItemCount);
  const wishlistItems = useSelector(selectWishlistItems);

  const [isWishlistHover, setIsWishlistHover] = useState(false);
  const handleMouseEnter = () => {
    setIsWishlistHover(true);
  };
  const handleMouseLeave = () => {
    setIsWishlistHover(false);
  };

  const handleGoToDetail = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className={styles.wishlistIcon}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={goToWishlist}
    >
      <img
        src='/assets/Icons/wishlist.svg'
        alt='wishlist'
        className={styles.image}
      />
      {wishlistItems.length >= 1 ? (
        <span className={styles.itemCount}>{wishlistItemCount}</span>
      ) : (
        <div></div>
      )}

      {isWishlistHover && (
        <>
          <div className={styles.triangle}></div>
          {wishlistItems.length === 0 ? (
            <div className={styles.emptyItems}>
              <img src='/assets/Images/empty-state-pp.svg' alt='' />
              <p>Wishlist is empty</p>
            </div>
          ) : (
            <>
              <div className={styles.triangle}></div>
              <div className={styles.dropdownItemWrapper}>
                <div className={styles.header}>
                  <p className={styles.titleHeader}>
                    Wishlist ({wishlistItemCount})
                  </p>
                  <Link to='/wishlist' className={styles.link}>
                    See All
                  </Link>
                </div>
                <div className={styles.boxScroll}>
                  <div className={styles.dropdownItem}>
                    {wishlistItems.map((item) => (
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
