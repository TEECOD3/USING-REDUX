import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import authReducer from "./AuthSlice";

const Store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default Store;
