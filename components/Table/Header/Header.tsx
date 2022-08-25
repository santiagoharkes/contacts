// Components

// Styles
import { HeaderTitleStyled, TableHeaderStyled } from "./HeaderStyles";

// Hooks & Context

// Redux

// Types

type HeaderData = {
  id: string;
  name: string;
};

type HeaderProps = {
  headerData: HeaderData[];
};

const Header = ({ headerData }: HeaderProps) => {
  return (
    <TableHeaderStyled>
      {headerData.map((header) => (
        <HeaderTitleStyled key={header.id}>{header.name}</HeaderTitleStyled>
      ))}
    </TableHeaderStyled>
  );
};

export default Header;
