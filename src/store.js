import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./features/user/accountsSlice";

const store = configureStore({
  reducer: {
    accounts: accountsReducer,
  },
});

export default store;
