import styles from './Checkout.module.scss';
import { TopHeader } from '../TopHeader';
import { Header } from '../Header';
import { Link, useNavigate } from 'react-router-dom';
import { Footer } from '../Footer';
import { useSelector } from 'react-redux';
import { removeSelectedItems, selectCartItems } from '@/redux/cartSlice';
import { Button } from '../Button';
import { useToast } from '@/context/ToastContext';
import { useAppDispatch } from '@/redux/hooks';
import { resetForm, updateField } from '@/redux/formSlice';
import { useFormValidation } from '@/hooks/useFormValidation';
import { CheckoutFormWithCustomHook } from '../CheckoutForm/CheckoutFormWithCustomHook';

export const CheckoutWithCustomHook: React.FC = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const dispatch = useAppDispatch();

  const backToCart = () => {
    navigate('/cart');
  };

  const { formState, validate } = useFormValidation();

  const handleSubmit = () => {
    // e.preventDefault();
    if (validate()) {
      Object.keys(formState).forEach((key) => {
        dispatch(
          updateField({
            name: key,
            value: formState[key as keyof typeof formState],
          })
        );
      });
      addToast({
        variant: 'success',
        message: `Success to Checkout, Happy Shopping`,
        onClose: () => {},
      });
      dispatch(removeSelectedItems());
      navigate('/');
      dispatch(resetForm());
    } else {
      alert('Please fill out all fields correctly.');
    }
  };

  const checkoutItems = useSelector(selectCartItems);
  const selectedItems = checkoutItems.filter((item) => item.selected);

  const totalPrice = selectedItems.reduce(
    (total, item) => total + item.price * item.quantity,
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
          <Link to='/cart' className={styles.linkStyle}>
            View Cart
          </Link>
          <span className={styles.linkStyle}>/</span>
          <p className={styles.tag}>CheckOut</p>
        </div>

        <h2 className={styles.titleBilling}>Billing Details</h2>
        <div className={styles.content}>
          <div id='form'>
            <CheckoutFormWithCustomHook />
          </div>
          <div className={styles.descriptionCheckout}>
            <ul className={styles.checkoutItems}>
              {selectedItems.map((item) => (
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
                <p>${totalPrice}</p>
              </div>
              <div className={styles.subTotal}>
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className={styles.total}>
                <p className={styles.totals}>Total:</p>
                <p className={styles.totals}>${totalPrice}</p>
              </div>
            </div>
            <div className={styles.buttonAction}>
              <Button color='primary' onClick={handleSubmit}>
                Place Order
              </Button>
              <Button color='optional' onClick={backToCart}>
                Back To Cart
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
