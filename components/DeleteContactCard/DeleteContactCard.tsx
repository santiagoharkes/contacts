import { useEffect } from "react";

// Components
import { Alert, Button, Typography } from "@mui/material";
import { FaRegUser } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import Spinner from "../Spinner/Spinner";

// Styles
import {
  AlertMessageStyled,
  AlertTextStyled,
  ButtonsContainerStyled,
  ContactCardContainerStyled,
  ContactCardInnerStyled,
  ContactTextLineStyled,
  DeleteContactContainerStyled,
  DeleteContactInnerStyled,
  DeleteIconStyled,
  DeleteTitleStyled,
} from "./DeleteContactCardStyles";

// Hooks & Context
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import useDeleteContacts from "../../hooks/Contacts/useDeleteContact";
import { useAxios } from "../../hooks/useAxios";

// Redux
import {
  failContactDelete,
  setContactDelete,
  startContactDelete,
  successContactDelete,
  tryDeleteAgain,
} from "../../redux/slices/deleteContact";

// Types
import { RowData } from "../ContactList/ContactList";

type DeleteContactProps = {
  contact: RowData;
};

const DeleteContactCard = ({ contact }: DeleteContactProps) => {
  const axios = useAxios();
  const dispatch = useDispatch();
  const router = useRouter();
  const { deleteFail, deleteLoading, deleteSuccess } = useDeleteContacts();

  const id: any = router.query.id;
  const queryClient = useQueryClient();

  const onSubmit = async () => {
    dispatch(startContactDelete());

    try {
      await axios.delete(`/contacts/${id}`);
      await queryClient.invalidateQueries(["contacts"]);

      dispatch(
        successContactDelete({
          show: true,
          message: "Contact has been deleted successfully!",
        })
      );
    } catch (error: any) {
      dispatch(
        failContactDelete({
          show: true,
          message:
            error?.response?.data?.message || "Error! Please try again later",
        })
      );
    }
  };

  useEffect(() => {
    dispatch(setContactDelete(contact));
  }, [contact, dispatch]);

  return (
    <DeleteContactContainerStyled>
      <DeleteTitleStyled>
        <DeleteIconStyled />
        Atention!
      </DeleteTitleStyled>
      <DeleteContactInnerStyled>
        {deleteLoading && <Spinner />}

        {deleteFail.show && (
          <>
            <Alert severity="error">{deleteFail.message}</Alert>
            <ButtonsContainerStyled>
              <Button onClick={() => router.back()}>Cancel</Button>

              <Button
                variant="contained"
                onClick={() => dispatch(tryDeleteAgain())}
              >
                Try again
              </Button>
            </ButtonsContainerStyled>
          </>
        )}

        {deleteSuccess.show && (
          <>
            <Alert severity="success">{deleteSuccess.message}</Alert>
            <ButtonsContainerStyled>
              <Button
                onClick={() => {
                  router.push("/contact");
                }}
              >
                Back to contacts
              </Button>
            </ButtonsContainerStyled>
          </>
        )}

        {!deleteLoading && !deleteFail.show && !deleteSuccess.show && (
          <>
            <Typography>You are about to delete this contact:</Typography>

            <ContactCardContainerStyled elevation={0}>
              <FaRegUser />
              <ContactCardInnerStyled>
                <ContactTextLineStyled>
                  <span>First Name:</span> {contact.firstName}
                </ContactTextLineStyled>
                <ContactTextLineStyled>
                  <span>Last Name:</span> {contact.lastName}
                </ContactTextLineStyled>
                <ContactTextLineStyled>
                  <span>Phone:</span> {contact.phone}
                </ContactTextLineStyled>
                <ContactTextLineStyled>
                  <span>Email:</span> {contact.email}
                </ContactTextLineStyled>
              </ContactCardInnerStyled>
            </ContactCardContainerStyled>

            <AlertMessageStyled>
              <AlertTextStyled>
                This will delete your contact permanently.
              </AlertTextStyled>
              <Typography>Are you sure?</Typography>
            </AlertMessageStyled>

            <ButtonsContainerStyled>
              <Button onClick={() => router.back()}>Cancel</Button>

              <Button
                variant="contained"
                color="error"
                startIcon={<FiTrash />}
                onClick={onSubmit}
              >
                Delete
              </Button>
            </ButtonsContainerStyled>
          </>
        )}
      </DeleteContactInnerStyled>
    </DeleteContactContainerStyled>
  );
};

export default DeleteContactCard;
