import { configureStore } from '@reduxjs/toolkit';
import { PhotosSlice } from '../features/photos/PhotosSlice';
import { ModalSlice } from '../features/modal/ModalSlice';
import { FavPhotosSlice } from '../features/favPhotos/FavPhotosSlice';


export const store = configureStore({
  reducer: {
    photos: PhotosSlice.reducer,
    modal: ModalSlice.reducer,
    favPhotos: FavPhotosSlice.reducer
  }
});
