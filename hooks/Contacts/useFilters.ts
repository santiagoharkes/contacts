import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const useFilters = () => {
  const contact = useSelector(
    (state: RootState) => state.filterContacts.contact
  );
  const hasFilters = useSelector(
    (state: RootState) => state.filterContacts.hasFilters
  );
  const currentPage = useSelector(
    (state: RootState) => state.filterContacts.currentPage
  );

  return {
    contact,
    hasFilters,
    currentPage,
  };
};

export default useFilters;
