import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const LayoutContainerStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
`;

export const ContentStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
  height: 100%;
`;
