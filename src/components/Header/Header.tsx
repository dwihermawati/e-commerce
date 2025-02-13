import React from 'react';
import styles from './Header.module.scss';
import { Button } from '../Button';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.logoNav}>
          {/* <span>ShopZone</span> */}
          <img
            className={styles.iconLogo}
            src='src/assets/Images/logo-shopzone.svg'
            alt='logo'
            // onClick={handleLogoClick}
          />

          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#signUp'>SignUp</a>
            </li>
          </ul>
        </div>
        <div className={styles.headerActions}>
          <div className={styles.searchBar}>
            <input
              type='text'
              placeholder='What are you looking for?'
              // value={searchQuery}
              // onChange={handleSearchChange}
              // onKeyUp={handleKeyPress}
            />
            <img
              src='src/assets/Icons/search.svg'
              alt='search'
              // onClick={handleSearchClick}
            />
          </div>
          <div className={styles.action}>
            <div className={styles.wishlistIcon}>
              <img
                src='src/assets/Icons/wishlist.svg'
                alt='wishlist'
                // onClick={goToWishlist}
              />
              {/* kalau gak ada, di alert aja, 'wishlist emphty' ketika di klik. hover, munculin div dibawah*/}
              <span className={styles.wishlistCount}>
                {/* {wishlist.length} */}
              </span>{' '}
              <div className={styles.hoverWishlist}>Wishlist Empty</div>
            </div>

            <div className={styles.cartIcon}>
              <img
                src='src/assets/Icons/cart.svg'
                alt='cart'
                // onClick={goToCart}
              />
              <span className={styles.cartCount}>{/* {cart.length} */}</span>{' '}
              <div className={styles.hoverCart}>
                <img
                  src='src/assets/Images/empty-state-pp.svg'
                  alt='emphtyCart'
                />
                <h2>Wow, your shopping cart is empty</h2>
                <p>Come on, fill it with the items of your dreams!</p>
                <Button
                  color='primary'
                  // onClick={bactToHomepage}
                >
                  Start Shopping
                </Button>
              </div>
            </div>

            {/* <div className={styles.user}> */}
            <div className={styles.wrapIconUser}>
              <img
                className={styles.userIcon}
                src='src/assets/Icons/user.svg'
                alt='user'
              />
              <div className={styles.dropdownUser}>
                <ul>
                  <li>
                    <img src='src/assets/Icons/user-white.svg' alt='user'></img>
                    <a href='#'>Manage My Account</a>
                  </li>
                  <li>
                    <img src='src/assets/Icons/mallBag.svg' alt='myOrder'></img>
                    <a href='#'>My Order</a>
                  </li>
                  <li>
                    <img
                      src='src/assets/Icons/cancelIcon.svg'
                      alt='cancel'
                    ></img>
                    <a href='#'>My Cancellations</a>
                  </li>
                  <li>
                    <img
                      src='src/assets/Icons/reviewIcon.svg'
                      alt='review'
                    ></img>
                    <a href='#'>My Reviews</a>
                  </li>
                  <li>
                    <img
                      src='src/assets/Icons/logoutIcon.svg'
                      alt='logout'
                    ></img>
                    <a href='#'>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
