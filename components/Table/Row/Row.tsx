// Components
import { IconButton, Tooltip } from "@mui/material";
import { FiEdit, FiTrash } from "react-icons/fi";

// Styles
import { TableDataStyled, TableRowStyled } from "./RowStyles";

// Hooks & Context
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

// Redux

// Types

type HeaderData = {
  id: string;
  name: string;
};

export type RowData = {
  [id: string]: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type RowProps = {
  rowData: RowData;
  headerData: HeaderData[];
};

const Row = ({ rowData, headerData }: RowProps) => {
  const router = useRouter();

  const goToEditPage = () => {
    router.push(`contact/${rowData.id}/edit`);
  };

  const goToDeletePage = () => {
    router.push(`contact/${rowData.id}/delete`);
  };

  return (
    <TableRowStyled>
      {headerData.map((header: HeaderData) => {
        if (header.id === "options") {
          return (
            <TableDataStyled key={header.id}>
              <Tooltip title="Edit Contact">
                <IconButton onClick={goToEditPage}>
                  <FiEdit />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete Contact">
                <IconButton sx={{ color: "red" }} onClick={goToDeletePage}>
                  <FiTrash />
                </IconButton>
              </Tooltip>
            </TableDataStyled>
          );
        } else {
          return (
            <TableDataStyled key={header.id}>
              {rowData[header.id]}
            </TableDataStyled>
          );
        }
      })}
    </TableRowStyled>
  );
};

export default Row;
