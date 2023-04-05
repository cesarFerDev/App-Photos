import { createSlice } from "@reduxjs/toolkit";
import {updateLocalStorage} from '../../auxfunctions/localStorage'

export const FavPhotosSlice = createSlice({
  
    name: "favPhotos",
    initialState: {
      favData: [],
      filter: ""
    },
    reducers: {
      setFavFilterSearch: (state, action) => {
        state.filter = action.payload;
      },
      loadFavPhotos: (state, action) => {
        if (state.favData.length === 0) {
          action.payload.forEach(photo => {
            state.favData.push(photo);
          });
        }
      },
      loadFilteredFavPhotos: (state, action) => {
        if (state.favData.filter !== "") {
          const filteredFavData = [];
          action.payload.forEach(photo => {
            if (photo.description !== null && photo.description.includes(state.filter)) {
              filteredFavData.push(photo);
            }
          })
          state.favData = filteredFavData;
        }
        
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
    }
});

export const {setFavFilterSearch, loadFavPhotos, loadFilteredFavPhotos, clearFavPhotos, changeDescription} = FavPhotosSlice.actions;
