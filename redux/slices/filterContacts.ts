import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ErrorSuccessType = {
  show: boolean;
  message: string;
};

export type Contacts = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
};

type ContactsState = {
  contact: Contacts;
  hasFilters: boolean;
  currentPage: number;
};

const initialState: ContactsState = {
  contact: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  hasFilters: false,
  currentPage: 1,
};

export const filterContactsSlice = createSlice({
  name: "filterContacts",
  initialState,
  reducers: {
    setContactToSearch: (state, action: PayloadAction<Contacts>) => {
      state.contact = {
        ...state.contact,
        ...action.payload,
      };
      state.hasFilters = true;
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setContactToSearch, setCurrentPage } =
  filterContactsSlice.actions;

export default filterContactsSlice.reducer;
