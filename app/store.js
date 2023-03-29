import { configureStore } from '@reduxjs/toolkit';
//import { PhotosSlice } from '../features/PhotosSlice';

export const store = configureStore({
  reducer: {
    //photos: PhotosSlice.reducer
  }
});
