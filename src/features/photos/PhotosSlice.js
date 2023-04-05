import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getRequiredData = (data) => { //Función para filtrar los datos de cada foto de la API
  const requiredData = [];
  data.forEach(photo => { 
  let photoWithRequiredInfo = {
    id: photo.id,
    description: photo.description,
    width: photo.width,
    height: photo.height,
    likes: photo.likes,
    urlFull: photo.urls.full,
    urlRegular: photo.urls.regular,
    urlThumb: photo.urls.thumb,
    date: new Date().toDateString(),
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
          // const page = 1;
          let link = "";
          if (filterPhotosString !== "") { //Elijo el enlace dependiendo de si quiero buscar por input de usuario
            link = `https://api.unsplash.com/search/photos?query=${filterPhotosString}&per_page=9&client_id=7lzCele8F7qdrt7xtsa4Ke8iHukZuVHX6ck40vGT-OE`;
            const response = await fetch(link);
            if (response.ok) {
              const data = await response.json();
              const requiredData = getRequiredData(data.results);
              
              return requiredData;
            } else {
              console.log("Error en la petición");
            }
          } else { //o fotos random sin más
            link = `https://api.unsplash.com/photos/random?count=27&client_id=7lzCele8F7qdrt7xtsa4Ke8iHukZuVHX6ck40vGT-OE`;
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
    status: "idle", //estado inicial, inactivo, para tener una condición de llamado y renderizado de la API
    filter: ""
  },
  reducers: {
    setFilterSearch: (state, action) => { //Setear el filtro para buscar en la API
      state.filter = action.payload;
    },
    favToggle: (state, action) => { //Para cambiar el estado de favorita en cada click de me gusta
      for (let i = 0; i < state.data.length; i++) {
        if (state.data[i].id === action.payload.id) {
          state.data[i].fav = !(state.data[i].fav);
          console.log(state.data[i].fav);
          break;
        }
      }
      
    },
    clearPhotos: (state) => { //Al refrescar los datos, vuelvo a poner el status a inactivo para llamar a la API
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