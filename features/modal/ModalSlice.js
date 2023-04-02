import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
    name: 'modal',
    initialState: {open: false},
    reducers: {
        openModal: (state) => {
            state.open = true;
        },
        closeModal: (state) => {
            state.open = false;
        }
    }
});

export const {openModal, closeModal} = ModalSlice.actions;
