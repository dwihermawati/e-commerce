import styles from './Categories.module.scss';
import React, { useState } from 'react';
import clsx from 'clsx';

type SubCategories = {
  id: number;
  name: string;
};

type Categories = {
  id: number;
  name: string;
  subCategories?: SubCategories[];
};

export const Categories: React.FC = () => {
  const categories: Categories[] = [
    {
      id: 1,
      name: `Woman’s Fashion`,
      subCategories: [
        {
          id: 1,
          name: 'Wedding Dress',
        },
        {
          id: 2,
          name: 'Sweater & Cardigan',
        },
        {
          id: 3,
          name: 'Swim Suits',
        },
      ],
    },
    {
      id: 2,
      name: `Men’s Fashion`,
      subCategories: [
        {
          id: 1,
          name: 'Hoodie & Sweatshirt',
        },
        {
          id: 2,
          name: 'Batik',
        },
        {
          id: 3,
          name: 'Pants',
        },
      ],
    },
    { id: 3, name: 'Electronics' },
    { id: 4, name: 'Home & Lifestyle' },
    { id: 5, name: 'Medicine' },
    { id: 6, name: 'Sports & Outdoor' },
    { id: 7, name: 'Baby’s & Toys' },
    { id: 8, name: 'Groceries & Pets' },
    { id: 9, name: 'Health & Beauty' },
  ];

  return (
    <div className={styles.headBanner}>
      <ul className={styles.categories}>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </ul>
      <img
        className={styles.banner}
        src='src/assets/Images/Untitled.png'
        alt='head banner'
      />
    </div>
  );
};

const CategoryItem: React.FC<{ category: Categories }> = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleSubCategories = () => {
    setIsOpen((prevState) => !prevState);
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
            src='src/assets/Icons/arrowHead.svg'
            alt='arrow'
          />
        )}
      </span>
      {isOpen && category.subCategories && (
        <ul className={styles.subCategories}>
          {category.subCategories.map((subCategory) => (
            <li key={subCategory.id}>
              <a href='#'>{subCategory.name}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
