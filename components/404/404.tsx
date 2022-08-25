import { Button, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Layout from "../Layout/Layout";
import { NotFoundContainerStyled } from "./404Styles";

const NotFoundPage = () => {
  return (
    <NotFoundContainerStyled>
      <Image src={"/404.png"} alt="" width={1100} height={731} />

      <Typography variant="h3" component="h2" sx={{ fontWeight: "bold" }}>
        Oops!
      </Typography>

      <Typography>Page not found!</Typography>
    </NotFoundContainerStyled>
  );
};

export default NotFoundPage;
