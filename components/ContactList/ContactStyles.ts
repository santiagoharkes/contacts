import styled from "@emotion/styled";
import { Accordion, Box } from "@mui/material";

export const PaginationContainerStyled = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .MuiPagination-ul {
    display: flex;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
  }
`;
