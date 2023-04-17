import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth-slice";
import globalSlice from "./global-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    global: globalSlice,
  },
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
