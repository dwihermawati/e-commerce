import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';
import styles from './SliderImage.module.scss';
import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

export const SliderImage: React.FC = () => {
  const navigate = useNavigate();
  const goToShopping = () => {
    navigate('/#products');
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    draggable: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  return (
    <div className={styles.sliderContainer} onClick={goToShopping}>
      <Slider {...settings} className={styles.slider}>
        <div className={styles.images}>
          <img src='/assets/Images/banner1.svg' alt='banner1' />
        </div>
        <div className={styles.images}>
          <img src='/assets/Images/banner1.svg' alt='banner1' />
        </div>
        <div className={styles.images}>
          <img src='/assets/Images/banner1.svg' alt='banner1' />
        </div>
        <div className={styles.images}>
          <img src='/assets/Images/banner1.svg' alt='banner1' />
        </div>
        <div className={styles.images}>
          <img src='/assets/Images/banner1.svg' alt='banner1' />
        </div>
      </Slider>
    </div>
  );
};
