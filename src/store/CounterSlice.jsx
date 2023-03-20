import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, isShowing: true };

const counterManipulationSlice = createSlice({
  name: "counterSlice",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.isShowing = !state.isShowing;
    },

    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

export const counterActions = counterManipulationSlice.actions;

export default counterManipulationSlice.reducer;
