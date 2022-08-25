// Components
import { ContactsProvider } from "./Contacts/CategoriesContext";

// Styles

// Hooks & Context
import { AxiosProvider } from "../hooks/useAxios";

// Redux

// Types

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AxiosProvider>
      <ContactsProvider>{children}</ContactsProvider>
    </AxiosProvider>
  );
};

export default Providers;
