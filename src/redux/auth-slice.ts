import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  token?: string;
  name?: string;
  isLogged: boolean;
};

const initialState: TInitialState = {
  token: localStorage.getItem("token") || undefined,
  isLogged: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.token = payload.token;
      localStorage.setItem("token", payload.token);
    },
  },
  // initialState: {
  //   token: localStorage.getItem(storage.ACCESS_TOKEN),
  //   name: localStorage.getItem(storage.NAME),
  //   id: localStorage.getItem(storage.ID),
  // },
  // reducers: {
  //   login: (state, { payload }) => {
  //     state.token = payload.token;
  //     state.name = payload.name;
  //     state.id = payload.id;
  //     localStorage.setItem(storage.ACCESS_TOKEN, state.token);
  //     localStorage.setItem(storage.NAME, state.name);
  //     localStorage.setItem(storage.ID, state.id);
  //   },
  //   logout: (state) => {
  //     localStorage.removeItem(storage.ACCESS_TOKEN);
  //     localStorage.removeItem(storage.NAME);
  //     localStorage.removeItem(storage.ID);
  //     state.token = undefined;
  //   },
  // },
});

const { reducer } = authSlice;
export const { login } = authSlice.actions;
export default reducer;
