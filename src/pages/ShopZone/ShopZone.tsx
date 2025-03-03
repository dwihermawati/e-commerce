import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../Home';
import { Checkout } from '../Checkout';
import { WishlistPage } from '../WishlistPage';
import { Error404 } from '../Error404';
import { ToastProvider } from '@/context/ToastContext';
import { DialogProvider } from '@/context/DialogContext';
import CartPage from '../CartPage';
import { ProductDetailsPage } from '../ProductDetailsPage';
import { AboutPage } from '../AboutPage';
import { ContactPage } from '../Contact';
import { SignUpPage } from '../SignUpPage';
import { CategoryPage } from '../CategoryPage';
import { SearchPage } from '../SearchPage';

export const ShopZone: React.FC = () => {
  return (
    <>
      <ToastProvider>
        <DialogProvider>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/search' element={<SearchPage />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='/wishlist' element={<WishlistPage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/product/:id' element={<ProductDetailsPage />} />
              <Route path='/category' element={<CategoryPage />} />
              <Route path='/about' element={<AboutPage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/signUp' element={<SignUpPage />} />
              <Route path='/error-404' element={<Error404 />} />
            </Routes>
          </Router>
        </DialogProvider>
      </ToastProvider>
    </>
  );
};
