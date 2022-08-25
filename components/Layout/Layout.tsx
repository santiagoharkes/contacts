// Components
import { Container } from "@mui/material";
import Navbar from "../Navbar/Navbar";

// Styles
import { ContentStyled, LayoutContainerStyled } from "./LayoutStyles";

// Hooks & Context

// Redux

// Types

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainerStyled>
      <Navbar />
      <Container sx={{ flex: 1 }}>
        <ContentStyled>{children}</ContentStyled>
      </Container>
    </LayoutContainerStyled>
  );
};

export default Layout;
