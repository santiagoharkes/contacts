import styled from "@emotion/styled";
import { Box, Paper, Typography } from "@mui/material";
import { FiAlertTriangle } from "react-icons/fi";

export const DeleteContactContainerStyled = styled(Box)`
  width: 100%;
  max-width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  box-shadow: 0px 0px 10px #00000017;
  margin: 0 auto;
  overflow: hidden;
`;

export const DeleteTitleStyled = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: #d32f2f;
  color: white;
  font-weight: bold;
`;

export const DeleteIconStyled = styled(FiAlertTriangle)`
  font-size: 21px;
`;

export const DeleteContactInnerStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const ContactCardContainerStyled = styled(Paper)`
  padding: 20px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  border: 2px dashed black;
  border-radius: 10px;
`;

export const ContactCardInnerStyled = styled(Box)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`;

export const ContactTextLineStyled = styled(Typography)`
  line-height: 1;

  & span {
    font-weight: bold;
  }
`;

export const AlertMessageStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const AlertTextStyled = styled(Typography)`
  color: #d32f2f;
  font-weight: bold;
`;

export const ButtonsContainerStyled = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;
