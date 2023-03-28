import { createSlice } from "@reduxjs/toolkit";

const initialState = {name: "", password: "", logged: false};

export const UserSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        logIn: (state, action) => {
            state = action.payload;
        },
        updateUser: (state, action) => {
            state = action.payload;
        },
        logOut: (state, action) => {
            state = {name: "", password: "", logged: false};
        }
    }
});

export const {logIn, updateUser, logOut} = UserSlice.actions;