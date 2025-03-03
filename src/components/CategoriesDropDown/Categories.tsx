import styles from './Categories.module.scss';
import React, { useState } from 'react';
import clsx from 'clsx';
import { CategoriesType } from '@/types/categories';
import { categoriesData } from '@/data/dataCategories';
import { SliderImage } from '../SliderImage';

export const CategoriesWithBanner: React.FC = () => {
  return (
    <div className={styles.categoriesBanner}>
      <ul className={styles.categories}>
        {categoriesData.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </ul>
      <div className={styles.sliderImage}>
        <SliderImage />
      </div>
    </div>
  );
};

const CategoryItem: React.FC<{ category: CategoriesType }> = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleSubCategories = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <li
      className={clsx(styles.categoryItem, isOpen && styles.open)}
      onClick={toogleSubCategories}
    >
      <span className={styles.categoryName}>
        {category.name}
        {category.subCategories && category.subCategories.length > 0 && (
          <img
            className={styles.arrowIcon}
            src='/assets/Icons/arrowHead.svg'
            alt='arrow'
          />
        )}
      </span>
      {isOpen && category.subCategories && (
        <ul className={styles.subCategories}>
          {category.subCategories.map((subCategory) => (
            <li key={subCategory.id}>
              <a href='#' onClick={handleLinkClick}>
                {subCategory.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
