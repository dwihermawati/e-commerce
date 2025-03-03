import { Rating } from '@/types/product';
import styles from './Rating.module.scss';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

export const RatingCount: React.FC<Rating> = ({ rate, count }) => {
  const fullStars = Math.floor(rate);
  const hasHalfStar = rate - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
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
  );
};
