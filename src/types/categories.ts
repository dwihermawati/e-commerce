export type SubCategoriesType = {
  id: number;
  name: string;
};

export type CategoriesType = {
  id: number;
  name: string;
  subCategories?: SubCategoriesType[];
};
