import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
              return data.results;
            } else {
              console.log("Según mi diagnóstico, es usted Mari Kong");
            }
          } else {
            link = `https://api.unsplash.com/photos/random?count=9&client_id=7lzCele8F7qdrt7xtsa4Ke8iHukZuVHX6ck40vGT-OE`;
            const response = await fetch(link);
            if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
            } else {
              console.log("Según mi diagnóstico, es usted Mari Kong");
            }
          }
          /*const response = await fetch(link);
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
            const requiredData = [];
            data.results.forEach(photo => {
              let photoWithRequiredInfo = {
                id: photo.id,
                description: photo.description,
                width: photo.width,
                height: photo.height,
                likes: photo.likes,
                urlFull: photo.urls.full,
                urlThumb: photo.urls.thumb,
                /*date: new Date(),*/
                /*fav: false
              }
              requiredData.push(photoWithRequiredInfo);
            });
            return requiredData;
          } else {
            console.log("Error en la petición");
          }*/
        } catch (error) {
          console.log(error);
        }
});

export const PhotosSlice = createSlice({
  
  name: "photos",
  initialState: { data: [], status: "idle", filter: "" },
  reducers: {
    setFilterSearch: (state, action) => {
      state.filter = action.payload;
    },
    favToggle: (state, action) => {
    for (let i = 0; i < state.data[0].length; i++) {
      
      if (state.data[0][i].id === action.payload.id) {
        state.data[0][i].fav = !(state.data[0][i].fav);
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
    builder.addCase(loadPhotos.fulfilled, (state, action) => {
      state.status = "fulfilled";
       if (state.data.length === 0) {
         state.data.push(action.payload);
       } else {
         state.data = [];
         state.data.push(action.payload);
       }
       });
    builder.addCase(loadPhotos.rejected, (state) => {
        state.status = "rejected";
    });
  },
});


export const {favToggle, setFilterSearch, clearPhotos} = PhotosSlice.actions;