import styles from './Cart.module.scss';
import { TopHeader } from '@/components/TopHeader';
import {
  clearCart,
  removeFromCart,
  toggleItemSelected,
  toggleSelectAll,
} from '@/redux/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import { Header } from '@/components/Header';
import { Link, useNavigate } from 'react-router-dom';
import { WishlistButton } from '../WishlistButton';
import { QuantityInput } from '../QuantityInput';
import { Button } from '../Button';
import { Footer } from '../Footer';
// import { useDialog } from '@/context/DialogContext';

export const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const { setDialog } = useDialog();

  const handleGoToDetail = (id: number) => {
    navigate(`/product/${id}`);
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleSelectItem = (id: number) => {
    dispatch(toggleItemSelected(id));
  };

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleSelectAll(e.target.checked));
  };

  const allSelected = cartItems.every((item) => item.selected);

  // untuk dialog
  // const handleDeleteSelectAll = () => {
  //   setDialog({
  //     title: 'Del'
  //   })
  // }

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const selectedItems = cartItems.filter(
    (item) => item.selected && item.quantity >= 1
  );
  const totalPrice = selectedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleGoToCheckout = () => {
    if (selectedItems.length > 0) {
      navigate('/checkout', {
        state: {
          items: selectedItems,
          totalPrice: totalPrice,
        },
      });
    } else {
      alert('Minimum purchase 1 item');
    }
  };

  const goToShopping = () => {
    navigate('/');
    // atur langsung agar mengarah ke productList
  };

  return (
    <>
      <TopHeader />
      <div className={styles.navbar}>
        <Header />
      </div>
      <div className={styles.link}>
        <Link to='/' className={styles.linkStyleHome}>
          Home
        </Link>
        <span className={styles.linkStyleHome}>/</span>
        <Link to='/cart' className={styles.linkStyle}>
          Cart
        </Link>
      </div>
      <main className={styles.mainContent}>
        {cartItems.length === 0 ? (
          <div className={styles.emptyDisplay}>
            <img src='/assets/Images/empty-state-pp.svg' alt='' />
            <p>Cart is empty</p>
            <Button color='primary' onClick={goToShopping}>
              Shop Now
            </Button>
          </div>
        ) : (
          <div className={styles.cartItems}>
            <div className={styles.content}>
              <div className={styles.checkedAll}>
                <div className={styles.checked}>
                  <input
                    type='checkbox'
                    checked={allSelected}
                    onChange={handleSelectAll}
                  />
                  <label>Choose All</label>
                </div>

                {allSelected && (
                  <span className={styles.delete} onClick={handleClearCart}>
                    Delete
                  </span>
                )}
              </div>

              <ul className={styles.list}>
                {cartItems.map((item) => (
                  <li key={item.id} className={styles.item}>
                    <input
                      type='checkbox'
                      checked={item.selected}
                      onChange={() => handleSelectItem(item.id)}
                    />
                    <div className={styles.imgDescription}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className={styles.image}
                        onClick={() => handleGoToDetail(item.id)}
                      />
                      <div className={styles.titlePriceAction}>
                        <div className={styles.titlePrice}>
                          <div className={styles.title}>
                            <h3 onClick={() => handleGoToDetail(item.id)}>
                              {item.title}
                            </h3>
                            <p>{item.category}</p>
                          </div>
                          <div className={styles.priceBox}>
                            <p className={styles.price}>${item.price}</p>
                          </div>
                        </div>
                        <div className={styles.action}>
                          <WishlistButton product={item} />
                          <img
                            src='/assets/Icons/remove.svg'
                            alt='remove'
                            onClick={() => handleRemoveItem(item.id)}
                            style={{ cursor: 'pointer' }}
                          />
                          <QuantityInput
                            id={item.id}
                            quantity={item.quantity}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.totalPrice}>
              <div className={styles.contentPrice}>
                <p>Cart Total</p>
                <div className={styles.total}>
                  <span>Total</span>
                  <h3>${totalPrice}</h3>
                </div>

                <Button color='primary' onClick={handleGoToCheckout}>
                  Procees to checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};
