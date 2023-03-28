//import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/*export const getPhotos = createAsyncThunk(
    "photos/getPhotos",
     async () => {
        const response = await fetch("https://api.unsplash.com/photos?page=1");
        const data = await response.json();
        return data;
});*/

/*export const PhotosSlice = createSlice({
  name: "photos",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPhotos.fulfilled, (state, action) => {
      state.push(action.payload);
    }),
    builder.addCase(getPhotos.rejected, (state, action) => {
        console.log("ERROR ESPECTACULAR");
      })
  }
});*/
