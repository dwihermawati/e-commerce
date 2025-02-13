import styles from './Home.module.scss';
import { Categories } from '@/components/Categories';
import { Header } from '@/components/Header';
import { TopHeader } from '@/components/TopHeader';
import { useCart } from '@/context/cartContext';
import { toast } from 'react-toastify'; // Import toast untuk notifikasi
import useFetchProducts from '@/hooks/useFetchProducts'; // Hook untuk mengambil data produk

import React from 'react';
import { CardProduct } from '@/components/CardProduct';
import { Product } from '@/types/product';

export const Home: React.FC = () => {
  const { products, loading, error } = useFetchProducts();
  // Mengambil fungsi addToCart dari cartContext
  const { addToCart } = useCart();

  // Fungsi untuk menangani penambahan produk ke keranjang
  const handleAddToCart = (product: Product) => {
    addToCart(product); // Menambahkan produk ke keranjang
    // Menampilkan notifikasi toast ketika produk berhasil ditambahkan ke keranjang
    toast.success(`${product.title} has been added to your cart!`, {
      position: 'top-center', // Menampilkan toast di posisi atas tengah
      autoClose: 3000, // Menutup toast otomatis setelah 3 detik
      hideProgressBar: true, // Menyembunyikan progress bar
      closeOnClick: true, // Menutup toast ketika diklik
      pauseOnHover: true, // Menjeda animasi ketika toast di-hover
    });
  };

  // Jika produk masih dalam proses loading, tampilkan loading message
  if (loading) {
    return <div>Loading products...</div>;
  }

  // Jika terjadi error saat mengambil data, tampilkan pesan error
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <TopHeader />
      <div className={styles.navbar}>
        <Header />
      </div>
      <Categories />
      <main className={styles.mainContent}>
        <div className={styles.title}>
          <div className={styles.boxAndTag}>
            <div className={styles.box}></div>
            <span>Our Products</span>
          </div>
          <h3>Explore Our Products</h3>
        </div>
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <CardProduct
              key={product.id} // Gunakan ID produk sebagai key
              {...product} // Spread operator untuk meneruskan semua properti produk
              onAddToCart={() => handleAddToCart(product)} // Fungsi yang dipanggil saat tombol "Add to Cart" diklik
            />
          ))}
        </div>
      </main>
    </>
  );
};
