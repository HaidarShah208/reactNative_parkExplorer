import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Key, ReactNode } from 'react';

interface FavoritePark {
  fullName: ReactNode;
  images: any;
  id: Key | null | undefined;
  parkId: string;
  userId: string;
}

interface FavoritesState {
  favorites: FavoritePark[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoritePark>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(fav => fav.parkId !== action.payload);
    },
    setFavorites: (state, action: PayloadAction<FavoritePark[]>) => {
      state.favorites = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites } = favoritesSlice.actions;

export const selectFavorites = (state: RootState) => state.favorites.favorites;

export default favoritesSlice.reducer;
