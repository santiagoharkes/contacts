import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

// Components
import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import { InputState } from "../../pages/contact/create";
import Input from "../Input/Input";

// Styles
import {
  AccordionStyled,
  ButtonsContainerStyled,
  InputsContainerStyled,
} from "./FiltersStyles";

// Hooks & Context
import { useDispatch } from "react-redux";
import useFilters from "../../hooks/Contacts/useFilters";

// Redux
import {
  Contacts,
  setContactToSearch,
} from "../../redux/slices/filterContacts";

// Types

const Filters = () => {
  const { contact } = useFilters();
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<InputState>({
    mode: "onBlur",
    defaultValues: {
      ...contact,
    },
  });

  const onClearInput = (id: any) => {
    reset({
      ...getValues(),
      [id]: "",
    });
  };

  const clearFilters = () => {
    const inputsData: Contacts = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    };

    dispatch(setContactToSearch(inputsData));
  };

  useEffect(() => {
    reset(contact);
  }, [contact, reset]);

  const onSubmit: SubmitHandler<InputState> = (data) => {
    const inputsData: Contacts = {};

    if (data.firstName) {
      inputsData.firstName = data.firstName;
    } else {
      inputsData.firstName = "";
    }

    if (data.lastName) {
      inputsData.lastName = data.lastName;
    } else {
      inputsData.lastName = "";
    }

    if (data.phone) {
      inputsData.phone = data.phone;
    } else {
      inputsData.phone = "";
    }

    if (data.email) {
      inputsData.email = data.email;
    } else {
      inputsData.email = "";
    }

    dispatch(setContactToSearch(inputsData));
  };

  return (
    <>
      <AccordionStyled>
        <AccordionSummary
          expandIcon={<GridExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            component="form"
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <InputsContainerStyled>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    clearInput={onClearInput}
                    id="firstName"
                    label="First Name"
                    type="text"
                    error={!!errors.firstName}
                    helperText={
                      errors.firstName ? errors.firstName.message : ""
                    }
                    {...field}
                  />
                )}
                rules={{
                  minLength: {
                    value: 3,
                    message: "First name must be at least 3 characters",
                  },
                }}
              />

              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    clearInput={onClearInput}
                    id="lastName"
                    label="Last Name"
                    type="text"
                    error={!!errors.lastName}
                    helperText={errors.lastName ? errors.lastName.message : ""}
                    {...field}
                  />
                )}
                rules={{
                  minLength: {
                    value: 3,
                    message: "Last name must be at least 3 characters",
                  },
                }}
              />

              <Controller
                name="phone"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
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
                    clearInput={onClearInput}
                    id="email"
                    label="Email"
                    type="string"
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ""}
                    {...field}
                  />
                )}
              />
            </InputsContainerStyled>

            <ButtonsContainerStyled>
              <Button
                disabled={
                  !contact.firstName &&
                  !contact.lastName &&
                  !contact.phone &&
                  !contact.email
                }
                type="button"
                onClick={clearFilters}
              >
                Clear filters
              </Button>
              <Button type="submit" variant="contained">
                Search
              </Button>
            </ButtonsContainerStyled>
          </Box>
        </AccordionDetails>
      </AccordionStyled>
    </>
  );
};

export default Filters;
