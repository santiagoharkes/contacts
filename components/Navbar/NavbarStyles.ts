import styled from "@emotion/styled";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export const AppBarStyled = styled(AppBar)`
  position: sticky;
  top: 0;
  background: #ffffff00;
  z-index: 10;
  box-shadow: 0px 0px 10px #0000001f;
  backdrop-filter: blur(10px);
  color: #330381;
`;

export const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoStyled = styled(Typography)`
  font-weight: 700;
  letter-spacing: 0.3rem;
  text-decoration: none;
  cursor: pointer;
`;
