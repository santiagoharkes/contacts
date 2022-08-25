// Components
import { Alert, AlertColor, Button } from "@mui/material";

// Styles
import { ButtonsContainerStyled } from "./CreateContactAlertStyles";

// Hooks & Context
import { useRouter } from "next/router";
import { UseFormReset } from "react-hook-form";
import { useDispatch } from "react-redux";
import useEditContacts from "../../hooks/Contacts/useEditContacts";

// Redux
import { finishContactPost } from "../../redux/slices/createContact";
import { tryEditAgain } from "../../redux/slices/editContact";

// Types
import { InputState } from "../../pages/contact/create";

type CreateContactProps = {
  severity: AlertColor | undefined;
  message: string;
  reset?: UseFormReset<InputState>;
};

const CreateContactAlert = ({
  severity,
  message,
  reset,
}: CreateContactProps) => {
  const { editMode } = useEditContacts();
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <>
      <Alert severity={severity}>{message}</Alert>
      <ButtonsContainerStyled>
        {severity === "error" ? (
          <Button
            variant="contained"
            onClick={() => {
              if (editMode) {
                dispatch(tryEditAgain());
              } else {
                dispatch(finishContactPost());
              }
            }}
          >
            Try again
          </Button>
        ) : (
          <>
            <Button
              onClick={() => {
                router.push("/contact");
              }}
            >
              Back to Contacts
            </Button>
            {!editMode && (
              <Button
                variant="contained"
                onClick={() => {
                  reset && reset();
                  dispatch(finishContactPost());
                }}
              >
                New Contact
              </Button>
            )}
          </>
        )}
      </ButtonsContainerStyled>
    </>
  );
};

export default CreateContactAlert;
