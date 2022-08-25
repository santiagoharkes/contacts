import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const usePostContacts = () => {
  const postSuccess = useSelector(
    (state: RootState) => state.createContact.success
  );
  const postFail = useSelector((state: RootState) => state.createContact.error);
  const postLoading = useSelector(
    (state: RootState) => state.createContact.loading
  );

  return {
    postSuccess,
    postFail,
    postLoading,
  };
};

export default usePostContacts;
