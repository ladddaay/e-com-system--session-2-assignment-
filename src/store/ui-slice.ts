import { createSlice } from "@reduxjs/toolkit";

type UIState = {
    isNavOpen: boolean;
};

const initialState: UIState = {
    isNavOpen: false,
};

export const uiSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleNav: (state) => {
            state.isNavOpen = !state;
        },
    },
});

export const { toggleNav } = uiSlice.actions;
