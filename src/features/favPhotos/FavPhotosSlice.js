import { createSlice } from "@reduxjs/toolkit";
import {updateLocalStorage} from '../../auxfunctions/localStorage'

//Estuve haciendo pruebas con el enlace de descarga (en el navegador) pero no llegué a entender como acceder al link de descarga
//Lo siento, no he llegado a cumplir los requisitos mínimos, he hecho lo que he podido :(

// export const downloadPhoto = createAsyncThunk(
//   "favPhotos/downloadPhoto",
//   async(id) => {
//       try {
//         const page = 1;
//         link = `https://api.unsplash.com/photos/photos/${id}/download?client_id=7lzCele8F7qdrt7xtsa4Ke8iHukZuVHX6ck40vGT-OE`;
//         const response = await fetch(link);
//         if (response.ok) {
//           const data = await response.json();
//           const requiredData = getRequiredData(data);
//           return requiredData;
//         } else {
//             console.log("Error en la petición");
//         }
//       } catch (error) {
//         console.log(error);
//       }
// });



export const FavPhotosSlice = createSlice({
  
    name: "favPhotos",
    initialState: {
      favData: [],
      filter: "",
    },
    reducers: {
      setFavFilterSearch: (state, action) => { //Setear el filtro de descripciones
        if (action.payload !== null) {
          state.filter = action.payload;
        }
      },
      loadFavPhotos: (state, action) => { //Cargar de una (para el localStorage como payload sobretodo)
        if (state.favData.length === 0) {
          action.payload.forEach(photo => {
            state.favData.push(photo);
          });
        }
      },
      addPhoto: (state, action) => {
        state.favData.push(action.payload);
      },
      deletePhoto: (state, action) => {
        let aux = [];
        for (let i=0; i < state.favData.length; i++) {
          if (state.favData[i].id !== action.payload[i]) {
            aux.push(state.favData[i]);
          }
        }
        state.favData = aux;
      },
      changeDescription: (state, action) => { 
        for (let i=0; i < state.favData.length; i++) {
          if (action.payload.id === state.favData[i].id) {
            state.favData[i].description = action.payload.description;
            break;
          }
        }
        updateLocalStorage(state.favData); //Update del cambio de descripción a las fotos favoritas de forma local (sin hacer POST en la API)
      },
      clearFavPhotos: (state) => {
        state.favData = [];
      }
    }
});

export const { addPhoto, deletePhoto, setFavFilterSearch, loadFavPhotos, changeDescription, clearFavPhotos} = FavPhotosSlice.actions;
