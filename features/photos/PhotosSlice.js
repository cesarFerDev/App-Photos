import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getRequiredData = (data) => {
  const requiredData = [];
  data.forEach(photo => {
  let photoWithRequiredInfo = {
    id: photo.id,
    description: photo.description,
    width: photo.width,
    height: photo.height,
    likes: photo.likes,
    urlFull: photo.urls.full,
    urlThumb: photo.urls.thumb,
    date: photo.updated_at,
    fav: false
    }
    requiredData.push(photoWithRequiredInfo);
  });
    return requiredData;
}

export const loadPhotos = createAsyncThunk(
    "photos/loadPhotos",
    async(filterPhotosString) => {
        try {
          const page = 1;
          let link = "";
          if (filterPhotosString !== "") {
            link = `https://api.unsplash.com/search/photos?query=${filterPhotosString}&page=${page}&per_page=9&client_id=7lzCele8F7qdrt7xtsa4Ke8iHukZuVHX6ck40vGT-OE`;
            const response = await fetch(link);
            if (response.ok) {
              const data = await response.json();
              const requiredData = getRequiredData(data.results);
              
              return requiredData;
            } else {
              console.log("Error en la petición");
            }
          } else {
            link = `https://api.unsplash.com/photos/random?count=9&client_id=7lzCele8F7qdrt7xtsa4Ke8iHukZuVHX6ck40vGT-OE`;
            const response = await fetch(link);
            if (response.ok) {
            const data = await response.json();
            const requiredData = getRequiredData(data);
            
            return requiredData;
            } else {
              console.log("Error en la petición");
            }
          }
        } catch (error) {
          console.log(error);
        }
});

export const PhotosSlice = createSlice({
  
  name: "photos",
  initialState: {
    data: [],
    status: "idle",
    filter: ""},
  reducers: {
    setFilterSearch: (state, action) => {
      state.filter = action.payload;
    },
    favToggle: (state, action) => {
      for (let i = 0; i < state.data.length; i++) {
        if (state.data[i].id === action.payload.id) {
          state.data[i].fav = !(state.data[i].fav);
          break;
        }
      }
    },
    clearPhotos: (state) => {
      state.data = [];
      state.status = "idle";
      state.filter = "";
    }
},
  extraReducers: (builder) => {
    builder.addCase(loadPhotos.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(loadPhotos.rejected, (state) => {
      state.status = "rejected";
    });
    builder.addCase(loadPhotos.fulfilled, (state, action) => {
      state.status = "fulfilled";
       if (state.data.length === 0) {
         action.payload.forEach(photo => {
          state.data.push(photo);
         });
       }
    });
  },
});


export const {favToggle, setFilterSearch, clearPhotos} = PhotosSlice.actions;