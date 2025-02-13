import styles from './CardProduct.module.scss';
import React, { useState } from 'react';
import { Product } from '@/types/product';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export interface CardProductProps extends Product {
  onAddToCart: (id: number) => void;
}

export const CardProduct: React.FC<CardProductProps> = ({
  id,
  title,
  image,
  price,
  category,
  rating: { rate, count },
  onAddToCart,
}) => {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [imgModal, setImgModal] = useState<string>('');

  const openModal = () => {
    setIsModalOpen(true);
    setImgModal(image);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.card}>
      <div className={styles.backgroundImage}>
        <div className={styles.wrapHeartEye}>
          <img
            src='src/assets/Icons/fillHeart.svg'
            alt='addWishlist'
            className={styles.heart}
          />
          <img
            src='src/assets/Icons/fillEye.svg'
            alt='eye'
            className={styles.eye}
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
      <div className={styles.cardContent}>
        <h3>{title}</h3>
        <p className={styles.category}>{category}</p>

        <div className={styles.priceRating}>
          <p className={styles.price}>${price}</p>
          <div className={styles.rateCount}>
            <span className={styles.rate}>
              {Array.from({ length: fullStars }, (_, i) => (
                <FaStar key={`full-${i}`} />
              ))}
              {hasHalfStar && <FaStarHalfAlt key='half' />}
              {Array.from({ length: emptyStars }, (_, i) => (
                <FaRegStar key={`empty-${i}`} />
              ))}
            </span>
            <span className={styles.count}>({count})</span>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
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
    </div>
  );
};
