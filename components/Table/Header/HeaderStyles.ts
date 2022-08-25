import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

// Table Header

export const TableHeaderStyled = styled(Box)`
  width: fit-content;
  min-width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(95px, 1fr)) minmax(300px, 1fr) minmax(
      auto,
      1fr
    );
  gap: 20px;
  border-bottom: 1px solid #e7e7e7;
  padding: 10px;
`;

export const HeaderTitleStyled = styled(Typography)`
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
`;
