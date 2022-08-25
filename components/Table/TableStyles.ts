import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const TableContainerStyled = styled(Box)`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px #00000017;
`;

export const InnerTableContainerStyled = styled(Box)`
  padding-bottom: 6px;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    height: 6px;
    width: 6px;
    background: #ebebeb;
  }

  ::-webkit-scrollbar-thumb {
    background: #330381;
    border-radius: 1ex;
    -webkit-border-radius: 1ex;
  }
`;
