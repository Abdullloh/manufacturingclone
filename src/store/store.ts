import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { categoryApi } from '../features/category/services/category.service';
import { dimensionsApi } from '../features/dimensions/services';
import { modelApi } from '../features/modelTypes/services';
import { productService } from '../features/products/services';
import { subCategoryApi } from '../features/subcategory/services';

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    [subCategoryApi.reducerPath]: subCategoryApi.reducer,
    [dimensionsApi.reducerPath]: dimensionsApi.reducer,
    [modelApi.reducerPath]: modelApi.reducer,
    [productService.reducerPath]: productService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoryApi.middleware,
      subCategoryApi.middleware,
      dimensionsApi.middleware,
      modelApi.middleware,
      productService.middleware,
    ),
});

setupListeners(store.dispatch);
