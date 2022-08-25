import React, { useState } from "react";

// Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { BiMenu } from "react-icons/bi";

// Styles
import { AppBarStyled, LogoStyled, ToolbarStyled } from "./NavbarStyles";

// Hooks & Context
import { useRouter } from "next/router";

// Redux

// Types

type Page = {
  id: number;
  title: string;
  path: string;
  variant?: "text" | "outlined" | "contained" | undefined;
};

type Pages = Page[];

const pages: Pages = [
  {
    id: 1,
    title: "Contacts",
    path: "/contact",
    variant: "outlined",
  },
  {
    id: 2,
    title: "New contact",
    path: "/contact/create",
    variant: "contained",
  },
];

type HandleCloseProps = {
  id: number;
  title: string;
  path: string;
};

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const router = useRouter();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page: HandleCloseProps) => {
    router.push(page.path);
    setAnchorElNav(null);
  };

  return (
    <AppBarStyled position="static">
      <Container maxWidth="xl">
        <ToolbarStyled disableGutters>
          <LogoStyled
            variant="h6"
            noWrap
            onClick={() => router.push("/")}
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
            }}
          >
            Backbone
          </LogoStyled>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <BiMenu />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={() => handleCloseNavMenu(page)}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LogoStyled
            variant="h5"
            noWrap
            onClick={() => router.push("/")}
            sx={{
              display: { xs: "flex", md: "none" },
              fontFamily: "monospace",
              flexGrow: 1,
            }}
          >
            Backbone
          </LogoStyled>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: "10px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => handleCloseNavMenu(page)}
                variant={page.variant}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </ToolbarStyled>
      </Container>
    </AppBarStyled>
  );
};

export default Navbar;
