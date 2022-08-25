import { createContext, useReducer, useContext } from "react";

// Components

// Styles

// Hooks & Context
import { ContactsReducer } from "./CategoriesReducer";

// Redux

// Types

type ContactContextProps = {
  children: React.ReactNode;
};

type ContactState = {
  currentPage: number;
  itemsPerPage: number;
};

type ObjectToShare = {
  contactsState: ContactState;
  contactsActions: {
    setCurrentPage: (payload: number) => void;
  };
};

export const initialState = {
  currentPage: 1,
  itemsPerPage: 10,
};

const ContactsContext = createContext<ObjectToShare>({
  contactsState: initialState,
  contactsActions: {
    setCurrentPage: () => {},
  },
});

export const ContactsProvider = ({ children }: ContactContextProps) => {
  const [state, dispatch] = useReducer(ContactsReducer, initialState);

  const setCurrentPage = (payload: number) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload });
  };

  const objectToShare = {
    contactsState: state,
    contactsActions: {
      setCurrentPage,
    },
  };

  return (
    <ContactsContext.Provider value={objectToShare}>
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => useContext(ContactsContext);
