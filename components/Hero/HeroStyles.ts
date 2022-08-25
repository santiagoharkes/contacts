import styled from "@emotion/styled";
import { Accordion, Box, Typography } from "@mui/material";

export const HeroContainerStyled = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const TextContainerStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
`;
