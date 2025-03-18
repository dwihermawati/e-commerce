import styles from './Checkout.module.scss';
import React, { useState } from 'react';
import { TopHeader } from '../TopHeader';
import { Header } from '../Header';
import { useLocation, useNavigate } from 'react-router-dom';
import { Footer } from '../Footer';
import { CheckoutForm } from '../CheckoutForm';
import { useSelector } from 'react-redux';
import { removeSelectedItems } from '@/redux/cartSlice';
import { Button } from '../Button';
import { useToast } from '@/context/ToastContext';
import { useAppDispatch } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { resetForm } from '@/redux/formSlice';
import { ProductDetail } from '@/types/productDetail';

export const CheckoutFromDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const dispatch = useAppDispatch();
  const [errors, setErrors] = useState<string[]>([]);
  const location = useLocation();
  const { state } = location;

  const backToDetail = () => {
    const productId = state?.items[0]?.id;
    if (productId) {
      navigate(`/product/${productId}`);
    }
  };

  const { name, email, phone, streetAddress, city } = useSelector(
    (state: RootState) => state.form
  );

  const validateForm = () => {
    const newErrors: string[] = [];

    if (!name) newErrors.push('name');
    if (!email) newErrors.push('email');
    if (!phone) newErrors.push('phone');
    if (!streetAddress) newErrors.push('streetAddress');
    if (!city) newErrors.push('city');

    if (email && !/\S+@\S+\.\S+/.test(email)) newErrors.push('email');

    if (phone && !/^\d{10,15}$/.test(phone)) newErrors.push('phone');

    setErrors(newErrors);

    if (newErrors.length > 0) {
      alert('Please fill out all fields correctly.');
      return false;
    }
    return true;
  };

  const scrollToInput = () => {
    const billingSection = document.getElementById('form');
    if (billingSection) {
      billingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      addToast({
        variant: 'success',
        message: `Success to Checkout, Happy Shopping`,
        onClose: () => {},
      });
      dispatch(removeSelectedItems());
      navigate('/');
      dispatch(resetForm());
    } else {
      scrollToInput();
    }
  };

  const itemsFromDetail: ProductDetail[] = state?.items || [];
  const totalPriceFromDetail = itemsFromDetail.reduce(
    (total: number, item: { price: number; quantity: number }) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <>
      <TopHeader />
      <div className={styles.navbar}>
        <Header />
      </div>
      <main className={styles.mainContent}>
        <div className={styles.link}>
          <p onClick={backToDetail} className={styles.linkStyle}>
            Product
          </p>
          <span className={styles.linkStyle}>/</span>
          <p className={styles.tag}>CheckOut</p>
        </div>

        <h2 className={styles.titleBilling} id='form'>
          Billing Details
        </h2>
        <div className={styles.content}>
          <CheckoutForm errors={errors} />

          <div className={styles.descriptionCheckout}>
            <ul className={styles.checkoutItems}>
              {itemsFromDetail.map((item) => (
                <li key={item.id} className={styles.checkoutItem}>
                  <div className={styles.boxImage}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.imgItemCheckout}
                    />
                  </div>
                  <div className={styles.titlePrice}>
                    <p>{item.title}</p>
                    <div className={styles.quantityPrice}>
                      <p>{item.quantity}X</p>
                      <p>${item.price}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className={styles.totalPrice}>
              <div className={styles.subTotal}>
                <p>SubTotal:</p>
                <p>${totalPriceFromDetail.toFixed(2)}</p>
              </div>
              <div className={styles.subTotal}>
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className={styles.total}>
                <p className={styles.totals}>Total:</p>
                <p className={styles.totals}>
                  ${totalPriceFromDetail.toFixed(2)}
                </p>
              </div>
            </div>
            <div className={styles.buttonAction}>
              <Button color='primary' onClick={handleSubmit}>
                Place Order
              </Button>
              <Button color='optional' onClick={backToDetail}>
                Back To Detail Product
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
