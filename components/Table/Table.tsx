// Components

// Styles
import { InnerTableContainerStyled, TableContainerStyled } from "./TableStyles";

// Hooks & Context

// Redux

// Types

type TableProps = {
  children: React.ReactNode;
};

const Table = ({ children }: TableProps) => {
  return (
    <TableContainerStyled>
      <InnerTableContainerStyled>{children}</InnerTableContainerStyled>
    </TableContainerStyled>
  );
};

export default Table;
