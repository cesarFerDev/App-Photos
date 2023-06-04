import { createSlice } from "@reduxjs/toolkit";
import {updateLocalStorage} from '../../auxfunctions/localStorage'

export const FavPhotosSlice = createSlice({
  
    name: "favPhotos",
    initialState: {
      favData: [],
      filter: "",
    },
    reducers: {
      setFavFilterSearch: (state, action) => {
        if (action.payload !== null) {
          state.filter = action.payload;
        }
      },
      loadFavPhotos: (state, action) => {
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
        updateLocalStorage(state.favData); 
      },
      clearFavPhotos: (state) => {
        state.favData = [];
      }
    },
});

export const { addPhoto, deletePhoto, setFavFilterSearch, loadFavPhotos, changeDescription, clearFavPhotos} = FavPhotosSlice.actions;
