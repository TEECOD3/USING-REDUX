import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, isShowing: true };

const counterManipulationSlice = createSlice({
  name: "counterSlice",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    toggleCounter: (state) => {
      state.isShowing = !isShowing;
    },

    increase: (state, action) => {
      state.counter = state.counter + action.payload;
    },
  },
});

const counterStore = configureStore({
  reducer: counterManipulationSlice.reducer,
});

export const counterAction = counterManipulationSlice.actions;

export default counterStore;
