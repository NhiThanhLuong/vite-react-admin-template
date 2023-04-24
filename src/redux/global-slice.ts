import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TInitialState = {
  theme: 'dark' | 'light';
};

const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';
const userTheme = localStorage.getItem('theme') as TInitialState['theme'];

const initialState: TInitialState = {
  theme: userTheme || systemTheme,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setGlobalState(state, action: PayloadAction<Partial<TInitialState>>) {
      Object.assign(state, action.payload);

      if (action.payload.theme) {
        const body = document.body;

        if (action.payload.theme === 'dark') {
          if (!body.hasAttribute('theme-mode')) {
            body.setAttribute('theme-mode', 'dark');
          }
        } else {
          if (body.hasAttribute('theme-mode')) {
            body.removeAttribute('theme-mode');
          }
        }
      }
    },
  },
});

export const { setGlobalState } = globalSlice.actions;

export default globalSlice.reducer;
