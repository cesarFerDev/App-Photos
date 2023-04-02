import { configureStore } from '@reduxjs/toolkit';
import { PhotosSlice } from '../features/photos/PhotosSlice';
import { ModalSlice } from '../features/modal/ModalSlice';


export const store = configureStore({
  reducer: {
    photos: PhotosSlice.reducer,
    modal: ModalSlice.reducer
  }
});
