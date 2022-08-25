import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ErrorSuccessType = {
  show: boolean;
  message: string;
};

export type ContactsState = {
  loading: boolean;
  error: ErrorSuccessType;
  success: ErrorSuccessType;
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
};

export const createContactSlice = createSlice({
  name: "createContact",
  initialState,
  reducers: {
    startContactPost: (state) => {
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
    finishContactPost: (state) => {
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
    failContactPost: (state, action: PayloadAction<ErrorSuccessType>) => {
      state.error = action.payload;
      state.success = {
        show: false,
        message: "",
      };
      state.loading = false;
    },
    successContactPost: (state, action: PayloadAction<ErrorSuccessType>) => {
      state.success = action.payload;
      state.error = {
        show: false,
        message: "",
      };
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  startContactPost,
  finishContactPost,
  failContactPost,
  successContactPost,
} = createContactSlice.actions;

export default createContactSlice.reducer;
