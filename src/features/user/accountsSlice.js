import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accounts: [],
};

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    addAccount(state, action) {
      state.accounts.push(action.payload);
    },
  },
});

export const { addAccount } = accountsSlice.actions;
export default accountsSlice.reducer;
