import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RowData } from "../../components/Table/Row/Row";

export type ErrorSuccess = {
  show: boolean;
  message: string;
};

export type ContactsState = {
  loading: boolean;
  error: ErrorSuccess;
  success: ErrorSuccess;
  contactToDelete: RowData;
};

const initialState: ContactsState = {
  loading: false,
  error: {
    show: false,
    message: "",
  },
  success: {
    show: false,
    message: "",
  },
  contactToDelete: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
};

export const deleteContact = createSlice({
  name: "deleteContact",
  initialState,
  reducers: {
    // Edit mode
    setContactDelete: (state, action: PayloadAction<RowData>) => {
      state.loading = false;
      state.error = {
        show: false,
        message: "",
      };
      state.success = {
        show: false,
        message: "",
      };
      state.contactToDelete = action.payload;
    },
    startContactDelete: (state) => {
      state.loading = true;
      state.error = {
        show: false,
        message: "",
      };
      state.success = {
        show: false,
        message: "",
      };
    },
    finishContactDelete: (state) => {
      state.loading = false;
      state.error = {
        show: false,
        message: "",
      };
      state.success = {
        show: false,
        message: "",
      };
      state.contactToDelete = {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      };
    },
    tryDeleteAgain: (state) => {
      state.loading = false;
      state.error = {
        show: false,
        message: "",
      };
      state.success = {
        show: false,
        message: "",
      };
    },
    failContactDelete: (state, action: PayloadAction<ErrorSuccess>) => {
      state.error = action.payload;
      state.success = {
        show: false,
        message: "",
      };
      state.loading = false;
    },
    successContactDelete: (state, action: PayloadAction<ErrorSuccess>) => {
      state.success = action.payload;
      state.error = {
        show: false,
        message: "",
      };
      state.loading = false;
      state.contactToDelete = {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  failContactDelete,
  finishContactDelete,
  setContactDelete,
  startContactDelete,
  successContactDelete,
  tryDeleteAgain,
} = deleteContact.actions;

export default deleteContact.reducer;
