import { useToast } from '@/context/ToastContext';
import { useAppDispatch } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import { addToWishlist, removeFromWishlist } from '@/redux/wishlistSlice';
import { WishlistProps } from '@/types/wishlistProps';
import React from 'react';
import { useSelector } from 'react-redux';

interface WishlistButtonProps {
  product: WishlistProps;
}

export const WishlistButton: React.FC<WishlistButtonProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);

  const isInWishlist = wishlist.find((item) => item.id === product.id);

  const { addToast } = useToast();

  const handleToggleWishlist = () => {
    if (isInWishlist) {
      addToast({
        variant: 'danger',
        message: 'Item has been removed from wishlist',
        onClose: () => {},
      });
      dispatch(removeFromWishlist(product.id));
    } else {
      if (product) {
        const wishlistItem = {
          ...product,
        };
        addToast({
          variant: 'information',
          message: 'The item has been successfully saved to the wishlist',
          onClose: () => {},
        });
        dispatch(addToWishlist(wishlistItem));
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
