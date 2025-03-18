import { Product } from '@/types/product';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchProductByCategory,
  fetchProductById,
  fetchProducts,
} from '@/api/products';
import { ProductDetail } from '@/types/productDetail';

type ProductState = {
  products: Product[];
  productDetail: ProductDetail | null;
  productsCategory: Product[];
  loading: boolean;
  error: string | null;
};

const initialState: ProductState = {
  products: [],
  productDetail: null,
  productsCategory: [],
  loading: false,
  error: null,
};

export const fetchProductsThunk = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const products = await fetchProducts();
    return products;
  }
);

export const fetchProductDetailById = createAsyncThunk<ProductDetail, number>(
  'products/fetchProductDetailById',
  async (id) => {
    const products = await fetchProductById(id);
    return { ...products, quantity: 1 };
  }
);

export const fetchProductByCategoryName = createAsyncThunk<Product[], string>(
  'products/fetchProductByCategoryName',
  async (category: string) => {
    const products = await fetchProductByCategory(category);
    return products;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProductsThunk.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.products = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });

    builder
      .addCase(fetchProductDetailById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProductDetailById.fulfilled,
        (state, action: PayloadAction<ProductDetail>) => {
          state.productDetail = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchProductDetailById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch product details';
      });

    builder
      .addCase(fetchProductByCategoryName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProductByCategoryName.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          // console.log('Fetched products for category from slice:',
          //   action.payload);
          state.productsCategory = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchProductByCategoryName.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || 'Failed to fetch products by category';
      });
  },
});

export default productSlice.reducer;
