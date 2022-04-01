import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  register: {},
};
export const UserData = createSlice({
  name: "handle",
  initialState,
  reducers: {
    registerUser: (state, { payload }) => {
      state.register = payload;
    },
  },
});
export const { registerUser } = UserData.actions;
export default UserData.reducer;
