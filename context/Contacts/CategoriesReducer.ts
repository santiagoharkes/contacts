type ContactState = {
  currentPage: number;
  itemsPerPage: number;
};

type ContactAction = {
  type: string;
  payload: any;
};

export const ContactsReducer = (state: ContactState, action: ContactAction) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
};
