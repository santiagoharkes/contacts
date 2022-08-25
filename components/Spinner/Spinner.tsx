// Components
import { CircularProgress } from "@mui/material";

// Styles
import { SpinnerContainerStyled } from "./SpinnerStyles";

// Hooks & Context

// Redux

// Types

const Spinner = () => {
  return (
    <SpinnerContainerStyled>
      <CircularProgress />
    </SpinnerContainerStyled>
  );
};

export default Spinner;
