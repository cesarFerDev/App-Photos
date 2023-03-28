import { configureStore } from '@reduxjs/toolkit';
//import { PhotosSlice } from '../features/PhotosSlice';
import { UserSlice } from '../features/user/UserSlice';

export const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    //photos: PhotosSlice.reducer
  }
});
