import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from "./features/user/accountsSlice";

const store = configureStore({
  reducer: {
    accounts: accountsReducer,
  },
  preloadedState: JSON.parse(localStorage.getItem("reduxState")) || {},
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
