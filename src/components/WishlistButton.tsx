import { useAppDispatch } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { addToWishlist, removeFromWishlist } from '@/redux/wishlistSlice';
import { WishlistProps } from '@/types/wishlistProps';
import React from 'react';
import { useSelector } from 'react-redux';

interface WishlistButtonProps {
  product: WishlistProps;
  // onAddToCart: (product: WishlistProps) => void;
}

export const WishlistButton: React.FC<WishlistButtonProps> = ({
  product,
  // onAddToCart,
}) => {
  const dispatch = useAppDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  const isInWishlist = wishlist.find((item) => item.id === product.id);

  const handleToggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      if (product) {
        const wishlistItem = {
          ...product,
          // onAddToCart: () => onAddToCart(product),
        };
        dispatch(addToWishlist(wishlistItem)); // Menambahkan produk ke wishlist
      }
    }
  };

  return (
    <img
      src={
        isInWishlist
          ? '/assets/Icons/fillHeart.svg'
          : '/assets/Icons/emptyHeart.svg'
      }
      alt='addWishlist'
      onClick={handleToggleWishlist}
      style={{ cursor: 'pointer' }}
    />
  );
};
