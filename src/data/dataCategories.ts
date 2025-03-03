import { CategoriesType } from '@/types/categories';

export const categoriesData: CategoriesType[] = [
  {
    id: 1,
    name: `Women's Clothing`,
    subCategories: [
      {
        id: 1,
        name: 'T Shirt Casual Cotton',
      },
      {
        id: 2,
        name: 'Short Sleeve',
      },
      {
        id: 3,
        name: 'Jacket',
      },
    ],
  },
  {
    id: 2,
    name: `Men's Clothing`,
    subCategories: [
      {
        id: 1,
        name: 'Slim Fit',
      },
      {
        id: 2,
        name: 'Cotton Jacket',
      },
      {
        id: 3,
        name: 'Backpack',
      },
    ],
  },
  { id: 3, name: 'Jewelery' },
  { id: 4, name: 'Electronics' },
  { id: 5, name: 'Home & Lifestyle' },
  { id: 6, name: 'Sports & Outdoor' },
  { id: 7, name: 'Baby’s & Toys' },
  { id: 8, name: 'Groceries & Pets' },
  { id: 9, name: 'Health & Beauty' },
];
