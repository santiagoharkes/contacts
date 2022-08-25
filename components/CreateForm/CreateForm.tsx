import React from "react";
import {
  Controller,
  Control,
  FieldErrorsImpl,
  UseFormReset,
  UseFormGetValues,
  UseFormHandleSubmit,
  SubmitHandler,
} from "react-hook-form";

// Components
import Input from "../Input/Input";
import { Box, Button, Typography } from "@mui/material";
import Spinner from "../Spinner/Spinner";
import CreateContactAlert from "../CreateContactAlert/CreateContactAlert";

// Styles

// Hooks & Context
import useEditContacts from "../../hooks/Contacts/useEditContacts";
import { useRouter } from "next/router";

// Redux

// Types
import { InputState } from "../../pages/contact/create";

type Feedback = {
  show: boolean;
  message: string;
};

type CreateFormProps = {
  control: Control<InputState, any>;
  reset: UseFormReset<InputState>;
  getValues: UseFormGetValues<InputState>;
  handleSubmit: UseFormHandleSubmit<InputState>;
  onSubmit: SubmitHandler<InputState>;
  errors: FieldErrorsImpl<{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }>;
  isLoading: boolean;
  fail: Feedback;
  success: Feedback;
};

const CreateForm = ({
  getValues,
  control,
  errors,
  reset,
  handleSubmit,
  onSubmit,
  isLoading,
  fail,
  success,
}: CreateFormProps) => {
  const { editMode } = useEditContacts();
  const router = useRouter();

  const onClearInput = (id: any) => {
    reset({
      ...getValues(),
      [id]: "",
    });
  };

  const isValidEmail = (email: string) =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const handleEmailValidation = (email: string) => {
    const isValid = isValidEmail(email);
    return isValid ? isValid : "Email is invalid";
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        maxWidth: "500px",
        border: "1px solid rgba(0, 0, 0, 0.12)",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: "0px 0px 10px #00000017",
        margin: "0 auto",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography sx={{ color: "#00000096" }}>Add new contact</Typography>

      {isLoading && <Spinner />}

      {fail.show && (
        <CreateContactAlert message={fail.message} severity="error" />
      )}

      {success.show && (
        <CreateContactAlert
          message={success.message}
          severity="success"
          reset={reset}
        />
      )}

      {!isLoading && !success.show && !fail.show && (
        <>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                clearIcon
                clearInput={onClearInput}
                id="firstName"
                label="First Name"
                type="text"
                error={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : ""}
                required
                {...field}
              />
            )}
            rules={{
              minLength: {
                value: 3,
                message: "First name must be at least 3 characters",
              },
              required: "First name is required",
            }}
          />

          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                clearIcon
                clearInput={onClearInput}
                id="lastName"
                label="Last Name"
                type="text"
                error={!!errors.lastName}
                helperText={errors.lastName ? errors.lastName.message : ""}
                required
                {...field}
              />
            )}
            rules={{
              minLength: {
                value: 3,
                message: "Last name must be at least 3 characters",
              },
              required: "Last name is required",
            }}
          />

          <Controller
            name="phone"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                clearIcon
                clearInput={onClearInput}
                id="phone"
                label="Phone"
                type="number"
                error={!!errors.phone}
                helperText={errors.phone ? errors.phone.message : ""}
                {...field}
              />
            )}
            rules={{
              minLength: {
                value: 5,
                message: "Phone number must be at least 5 characters",
              },
              maxLength: {
                value: 10,
                message: "Phone number must be at most 10 characters",
              },
            }}
          />

          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                clearIcon
                clearInput={onClearInput}
                id="email"
                label="Email"
                type="email"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                {...field}
              />
            )}
            rules={{
              validate: handleEmailValidation,
            }}
          />

          <Button type="submit" variant="contained">
            {editMode ? "Edit" : "Create"}
          </Button>
          <Button type="button" onClick={() => router.back()}>
            Go back
          </Button>
        </>
      )}
    </Box>
  );
};

export default CreateForm;
