import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RowData } from "../../components/Table/Row/Row";

export type ErrorSuccessType = {
  show: boolean;
  message: string;
};

export type ContactsState = {
  loading: boolean;
  error: ErrorSuccessType;
  success: ErrorSuccessType;
  editMode: boolean;
  contactToEdit: RowData;
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
  editMode: false,
  contactToEdit: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
};

export const editContactSlice = createSlice({
  name: "editContact",
  initialState,
  reducers: {
    // Edit mode
    setContactToEdit: (state, action: PayloadAction<RowData>) => {
      state.loading = false;
      state.error = {
        show: false,
        message: "",
      };
      state.success = {
        show: false,
        message: "",
      };
      state.editMode = true;
      state.contactToEdit = action.payload;
    },
    startContactEdit: (state) => {
      state.loading = true;
      state.error = {
        show: false,
        message: "",
      };
      state.success = {
        show: false,
        message: "",
      };
      state.editMode = true;
    },
    finishContactEdit: (state) => {
      state.loading = false;
      state.error = {
        show: false,
        message: "",
      };
      state.success = {
        show: false,
        message: "",
      };
      state.editMode = false;
      state.contactToEdit = {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      };
    },
    tryEditAgain: (state) => {
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
    failContactEdit: (state, action: PayloadAction<ErrorSuccessType>) => {
      state.error = action.payload;
      state.success = {
        show: false,
        message: "",
      };
      state.loading = false;
    },
    successContactEdit: (state, action: PayloadAction<ErrorSuccessType>) => {
      state.success = action.payload;
      state.error = {
        show: false,
        message: "",
      };
      state.loading = false;
      state.contactToEdit = {
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
  setContactToEdit,
  startContactEdit,
  finishContactEdit,
  failContactEdit,
  successContactEdit,
  tryEditAgain,
} = editContactSlice.actions;

export default editContactSlice.reducer;
