// store.ts
import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import getDonationReducer from './slice/getDonationSlice';
import dontionRequest from './slice/getDonationRequestSlice';
import authReducer from './slice/authSlice';
import parksReducer from './slice/parkSlice';
import favoritesReducer from './slice/favoriteSlice';
import {useDispatch,} from 'react-redux';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    donation: getDonationReducer,
    request: dontionRequest,
    parks: parksReducer,
    favorites: favoritesReducer,
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
