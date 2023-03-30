import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const clientID = "&client_id=7lzCele8F7qdrt7xtsa4Ke8iHukZuVHX6ck40vGT-OE";
const page = 1;

export const loadPhotos = createAsyncThunk(
  "photos/loadPhotos",
   async () => {
      try {
        const response = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=9${clientID}`);
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          console.log("Error en la petición");
        }
      } catch (error) {
        console.log(error);
      }
});

export const PhotosSlice = createSlice({
  name: "photos",
  initialState: { data: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadPhotos.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(loadPhotos.fulfilled, (state, action) => {
      state.status = "fulfilled";
      if (state.data.length === 0) {
        state.data.push(action.payload);
      }
    });
    builder.addCase(loadPhotos.rejected, (state) => {
        state.status = "rejected";
    });
  },
});
