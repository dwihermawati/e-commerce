import styles from './Categories.module.scss';
import React from 'react';
// import clsx from 'clsx';
// import { CategoriesType } from '@/types/categories';
// import { categoriesData } from '@/data/dataCategories';
import { SliderImage } from '../SliderImage';
// import { Link } from 'react-router-dom';

// export const CategoriesWithBanner: React.FC = () => {
export const Banner: React.FC = () => {
  return (
    <div className={styles.Banner}>
      {/* <ul className={styles.categories}>
        {categoriesData.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </ul> */}
      <div className={styles.sliderImage}>
        <SliderImage />
      </div>
    </div>
  );
};

// const CategoryItem: React.FC<{ category: CategoriesType }> = ({ category }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toogleSubCategories = () => {
//     setIsOpen((prevState) => !prevState);
//   };

//   const handleLinkClick = (e: React.MouseEvent) => {
//     e.stopPropagation();
//   };

//   return (
//     <li
//       className={clsx(styles.categoryItem, isOpen && styles.open)}
//       onClick={toogleSubCategories}
//     >
//       <span className={styles.categoryName}>
//         <Link to={`/category/${category.name}`} className={styles.categoryName}>
//           {category.name}
//         </Link>

//         {category.subCategories && category.subCategories.length > 0 && (
//           <img
//             className={styles.arrowIcon}
//             src='/assets/Icons/arrowHead.svg'
//             alt='arrow'
//           />
//         )}
//       </span>
//       {isOpen && category.subCategories && (
//         <ul className={styles.subCategories}>
//           {category.subCategories.map((subCategory) => (
//             <li key={category.id}>
//               <Link
//                 to={`/category/${subCategory.name}`}
//                 onClick={handleLinkClick}
//                 className={styles.linkSubCategory}
//               >
//                 {subCategory.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// };
