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

    transferTo(state, action) {
      const { fromEmail, toEmail, ammount, date, description } = action.payload;
      const accountTo = state.accounts.find((acc) => acc.email === toEmail);
      const accountFrom = state.accounts.find((acc) => acc.email === fromEmail);

      accountTo.movements.push({ ammount, date, description });
      accountFrom.movements.push({ ammount: -ammount, date, description });
    },

    loanApproved(state, action) {
      const { id, ammount, description } = action.payload;
      const account = state.accounts.find((acc) => acc.id === id);

      account.movements.push({
        ammount,
        date: new Date().toISOString(),
        description,
      });
    },

    deleteAccount(state, action) {
      state.accounts = state.accounts.filter(
        (acc) => acc.id !== action.payload,
      );
    },
  },
});

export const {
  addAccount,
  getCurrentAccount,
  transferTo,
  loanApproved,
  deleteAccount,
} = accountsSlice.actions;
export default accountsSlice.reducer;
