import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducer/counterSlice";
import Submit from "./reducer/Submit";
import UserData from "./reducer/UserData";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    register: Submit,
    handle: UserData,
  },
});
