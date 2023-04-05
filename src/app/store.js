import { configureStore } from '@reduxjs/toolkit';
import { PhotosSlice } from '../features/photos/PhotosSlice';
import { FavPhotosSlice } from '../features/favPhotos/FavPhotosSlice';

export const store = configureStore({
  reducer: {
    photos: PhotosSlice.reducer,
    favPhotos: FavPhotosSlice.reducer
  }
});
