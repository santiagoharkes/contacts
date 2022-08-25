import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const useEditContacts = () => {
  const editSuccess = useSelector(
    (state: RootState) => state.editContact.success
  );
  const editFail = useSelector((state: RootState) => state.editContact.error);
  const editLoading = useSelector(
    (state: RootState) => state.editContact.loading
  );
  const contactToEdit = useSelector(
    (state: RootState) => state.editContact.contactToEdit
  );
  const editMode = useSelector(
    (state: RootState) => state.editContact.editMode
  );

  return {
    editSuccess,
    editFail,
    editLoading,
    contactToEdit,
    editMode,
  };
};

export default useEditContacts;
