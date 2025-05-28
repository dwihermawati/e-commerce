import styles from './Header.module.scss';
// import { Hamburger } from '../Hamburger/Hamburger';
import { Link, useNavigate } from 'react-router-dom';
import { setSearchQuery } from '@/redux/searchSlice';
import { useAppDispatch } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';
import { DropDownUser } from '../DropDownUser';
import { DropDownWishlist } from '../DropDownWishlist';
import { DropDownCart } from '../DropDownCart';
import clsx from 'clsx';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };
  const handleSearchClick = () => {
    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const home = () => {
    navigate('/');
  };

  return (
    <>
      <div className={styles.header}>
        <div className={clsx('container', styles.navbar)}>
          {/* <div className={styles.hamburger}>
            <Hamburger />
          </div> */}
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
                onKeyDown={handleKeyDown}
              />
              <img
                src='/assets/Icons/search.svg'
                alt='search'
                onClick={handleSearchClick}
              />
            </div>
            <div className={styles.action}>
              <DropDownWishlist />
              <DropDownCart />
              <DropDownUser />
            </div>
          </div>
        </div>
      </div>
      {}
    </>
  );
};
