import React from 'react';
import styles from './Header.module.scss';
import { Button } from '../Button';
import { Hamburger } from '../Hamburger/Hamburger';
import { Link, useNavigate } from 'react-router-dom';
import { setSearchQuery } from '@/redux/searchSlice';
import { useAppDispatch } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value));
  };
  const handleSearchSubmit = () => {
    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const goToCart = () => {
    navigate('/cart');
  };

  const goToWishlist = () => {
    navigate('/wishlist');
  };

  const notFound = () => {
    navigate('/error-404');
  };

  const home = () => {
    navigate('/');
  };

  return (
    <div className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.hamburger}>
          <Hamburger />
        </div>
        <div className={styles.logoNav}>
          <img
            className={styles.iconLogo}
            src='/assets/Images/logo-shopzone.svg'
            alt='logo'
            onClick={home}
          />
          <ul>
            <li>
              <Link to='/' className={styles.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/contact' className={styles.link}>
                Contact
              </Link>
            </li>
            <li>
              <Link to='/about' className={styles.link}>
                About
              </Link>
            </li>
            <li>
              <Link to='/signUp' className={styles.link}>
                SignUp
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.headerActions}>
          <div className={styles.searchBar}>
            <input
              type='text'
              placeholder='What are you looking for?'
              value={searchQuery}
              onChange={handleSearchChange}
              // onKeyUp={handleKeyPress}
            />
            <img
              src='/assets/Icons/search.svg'
              alt='search'
              onClick={handleSearchSubmit}
            />
          </div>
          <div className={styles.action}>
            <div className={styles.wishlistIcon}>
              <img
                src='/assets/Icons/wishlist.svg'
                alt='wishlist'
                onClick={goToWishlist}
              />
              {/* kalau gak ada, di alert aja, 'wishlist emphty' ketika di klik. hover, munculin div dibawah*/}
              <span className={styles.wishlistCount}>
                {/* {wishlist.length} */}
              </span>{' '}
              <div className={styles.hoverWishlist}>Wishlist Empty</div>
            </div>

            <div className={styles.cartIcon}>
              <img src='/assets/Icons/cart.svg' alt='cart' onClick={goToCart} />
              <span className={styles.cartCount}>
                {/* {cart.length} */}
              </span>{' '}
              <div className={styles.hoverCart}>
                <img src='/assets/Images/empty-state-pp.svg' alt='emphtyCart' />
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
                src='/assets/Icons/user.svg'
                alt='user'
              />
              <div className={styles.dropdownUser}>
                <ul>
                  <li onClick={notFound}>
                    <img src='/assets/Icons/user-white.svg' alt='user' />
                    <a href='#'>Manage My Account</a>
                  </li>
                  <li onClick={notFound}>
                    <img src='/assets/Icons/mallBag.svg' alt='myOrder' />
                    <a href='#'>My Order</a>
                  </li>
                  <li onClick={notFound}>
                    <img src='/assets/Icons/cancelIcon.svg' alt='cancel' />
                    <a href='#'>My Cancellations</a>
                  </li>
                  <li onClick={notFound}>
                    <img src='/assets/Icons/reviewIcon.svg' alt='review' />
                    <a href='#'>My Reviews</a>
                  </li>
                  <li onClick={notFound}>
                    <img src='/assets/Icons/logoutIcon.svg' alt='logout' />
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
