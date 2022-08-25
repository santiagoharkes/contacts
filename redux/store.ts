import { configureStore } from "@reduxjs/toolkit";
import createContactReducer from "./slices/createContact";
import editContactReducer from "./slices/editContact";
import filterContactsSlice from "./slices/filterContacts";
import deleteContactSlice from "./slices/deleteContact";

export const store = configureStore({
  reducer: {
    createContact: createContactReducer,
    editContact: editContactReducer,
    filterContacts: filterContactsSlice,
    deleteContact: deleteContactSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
