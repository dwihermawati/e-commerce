import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './Home';
import { WishlistPage } from './WishlistPage';
import { Error404 } from './Error404';
// import { DialogProvider } from '@/context/DialogContext';
import CartPage from './CartPage';
import { ProductDetailsPage } from './ProductDetailsPage';
import { AboutPage } from './AboutPage';
import { ContactPage } from './Contact';
import { SignUpPage } from './SignUpPage';
import { CategoryPage } from './CategoryPage';
import { SearchPage } from './SearchPage';
import { useAppDispatch } from '@/redux/hooks';
import { clearSearchQuery } from '@/redux/searchSlice';
import { CheckoutPage } from './CheckoutPage';
import { CheckoutFromDetailPage } from '@/components/Checkout/CheckoutFromDetailPage';

export const ShopZone: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    if (!location.pathname.includes('/search')) {
      console.log('Clearing search query');
      dispatch(clearSearchQuery());
    }
  }, [dispatch, location]);

  return (
    <>
      {/* <DialogProvider> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/checkout/:title' element={<CheckoutFromDetailPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/product/:id' element={<ProductDetailsPage />} />
        <Route path='/category/:categoryName' element={<CategoryPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/signUp' element={<SignUpPage />} />
        <Route path='/error-404' element={<Error404 />} />
      </Routes>
      {/* </DialogProvider> */}
    </>
  );
};
