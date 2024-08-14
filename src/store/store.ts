import {useDispatch,} from 'react-redux';
import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import parksReducer from './slice/parkSlice';
import favoritesReducer from './slice/favoriteSlice';
import searchParksReducer from './slice/searchParksSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    parks: parksReducer,
    favorites: favoritesReducer,
     searchParks: searchParksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
