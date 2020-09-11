import { configureStore } from "@reduxjs/toolkit";
import contactsItemsFilteredReducer from "./reducers";

const store = configureStore({
  reducer: {
    contacts: contactsItemsFilteredReducer,
  },
});

export default store;
