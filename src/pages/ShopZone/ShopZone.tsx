import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../Home';
import { Search } from '../Search';
import { Checkout } from '../Checkout';
import { Wishlist } from '../Wishlist';
import { Cart } from '../Cart';
import { ProductDetail } from '../ProductDetails';
import { Error404 } from '../Error404';
import { CartProvider } from '@/context/cartContext';

export const ShopZone: React.FC = () => {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='/wishlist' element={<Wishlist />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/productDetails' element={<ProductDetail />}></Route>
            <Route path='/error404' element={<Error404 />}></Route>
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
};
