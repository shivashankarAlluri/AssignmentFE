import { createSlice } from "@reduxjs/toolkit";

const passwordSlice = createSlice({
  name: "password",
  initialState: null,
  reducers: {
    addPassword: (state, action) => {
      return action.payload;
    },
    removePassword: () => {
      return null;
    },
  },
});

export const { addPassword, removePassword } = passwordSlice.actions;
export default passwordSlice.reducer;