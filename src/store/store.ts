import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducers/counter";
import auth from "../reducers/auth";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: auth,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
