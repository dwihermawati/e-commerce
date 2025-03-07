import styles from './CardProduct.module.scss';
import React, { useState } from 'react';
import { Product } from '@/types/product';
import { RatingCount } from '@/components/Rating';
import { WishlistButton } from '../WishlistButton';

export interface CardProductProps extends Product {
  onAddToCart: (id: number) => void;
  onGoToDetail: (id: number) => void;
}

export const CardProduct: React.FC<CardProductProps> = ({
  id,
  title,
  image,
  price,
  category,
  rating: { rate, count },
  onAddToCart,
  onGoToDetail,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [imgModal, setImgModal] = useState<string>('');

  const openModal = () => {
    setIsModalOpen(true);
    setImgModal(image);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const product = {
    id,
    title,
    image,
    price,
    category,
    rating: { rate, count },
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.backgroundImage}>
          <div className={styles.wrapHeartEye}>
            <WishlistButton product={product} />
            <img
              src='/assets/Icons/fillEye.svg'
              alt='eye'
              className={styles.eye}
              onClick={() => onGoToDetail(id)}
            />
          </div>
          <div className={styles.boxImage}>
            <img
              src={image}
              alt={title}
              className={styles.image}
              onClick={openModal}
            />
          </div>
          <button
            className={styles.addToCartButton}
            onClick={() => onAddToCart(id)}
          >
            Add To Cart
          </button>
        </div>
        <div className={styles.cardContent} onClick={() => onGoToDetail(id)}>
          <h3>{title}</h3>
          <p className={styles.category}>{category}</p>

          <div className={styles.priceRating}>
            <p className={styles.price}>${price}</p>
            <RatingCount rate={rate} count={count} />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className={styles.open} onClick={closeModal}>
          <span className={styles.close} onClick={closeModal}>
            &times;
          </span>
          <img
            className={styles.modalContent}
            src={imgModal}
            alt='Modal content'
          />
        </div>
      )}
    </>
  );
};
