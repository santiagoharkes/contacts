// Components
import { Button, Typography } from "@mui/material";
import Image from "next/image";

// Styles
import { NoContactsContainerStyled } from "./NoContactsStyles";

// Hooks & Context
import { useDispatch } from "react-redux";

// Redux
import {
  Contacts,
  setContactToSearch,
} from "../../redux/slices/filterContacts";

// Types

const NoContacts = () => {
  const dispatch = useDispatch();

  const clearFilters = () => {
    const inputsData: Contacts = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    };

    dispatch(setContactToSearch(inputsData));
  };

  return (
    <NoContactsContainerStyled>
      <Typography variant="h3" component="h2" sx={{ fontWeight: "bold" }}>
        Oops!
      </Typography>

      <Typography>No data found</Typography>

      <Image src={"/noData.png"} alt="" width={200} height={200} />

      <Button onClick={clearFilters}>Clear filters</Button>
    </NoContactsContainerStyled>
  );
};

export default NoContacts;
