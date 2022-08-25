import styled from "@emotion/styled";
import { Accordion, Box } from "@mui/material";

export const AccordionStyled = styled(Accordion)`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0px 0px 10px #00000017;

  &:first-of-type {
    border-radius: 10px;
    /* border-top-left-radius: 20px;
    border-top-right-radius: 20px; */
  }
`;

export const InputsContainerStyled = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media screen and (max-width: 460px) {
    grid-template-columns: 1fr;
  }
`;

export const ButtonsContainerStyled = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;
