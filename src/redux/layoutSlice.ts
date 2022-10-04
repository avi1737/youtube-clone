import { createSlice } from "@reduxjs/toolkit";

type Layout = {
  mode: string;
  sideBarOpen: boolean;
};

const initialState: Layout = {
  mode: "light",
  sideBarOpen: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState: initialState,
  reducers: {
    switchMode(state) {
      if (state.mode === "light") {
        state.mode = "dark";
      } else {
        state.mode = "light";
      }
    },
    toggleSidebarMenu(state) {
      state.sideBarOpen = !state.sideBarOpen;
    },
  },
});

export const { switchMode, toggleSidebarMenu } = layoutSlice.actions;
export const layoutReducer = layoutSlice.reducer;
