import styled from "@emotion/styled";
import { Box } from "@mui/material";

// Table Row

export const TableRowStyled = styled(Box)`
  width: fit-content;
  min-width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(95px, 1fr)) minmax(300px, 1fr) minmax(
      min-content,
      1fr
    );
  gap: 20px;
  border-bottom: 1px solid #e7e7e7;
  padding: 10px;
  transition: all 0.2s ease;

  &:hover {
    background: #8080801a;
  }
`;

export const TableDataStyled = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  overflow: auto;
  padding-bottom: 6px;

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
