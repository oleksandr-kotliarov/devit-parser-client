import { configureStore } from '@reduxjs/toolkit';
import searchSettingsReducer from '../features/searchSettings/searchSettingsSlice';
import authReducer from '../features/auth/authSlice';
import { articlesApi } from '@/service/articles';

export const store = configureStore({
  reducer: {
    searchSettings: searchSettingsReducer,
    auth: authReducer,
    articlesApi: articlesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
