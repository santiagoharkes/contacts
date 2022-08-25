import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const useDeleteContacts = () => {
  const deleteSuccess = useSelector(
    (state: RootState) => state.deleteContact.success
  );
  const deleteFail = useSelector(
    (state: RootState) => state.deleteContact.error
  );
  const deleteLoading = useSelector(
    (state: RootState) => state.deleteContact.loading
  );

  return {
    deleteSuccess,
    deleteFail,
    deleteLoading,
  };
};

export default useDeleteContacts;
