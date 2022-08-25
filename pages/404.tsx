import { Button, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import NotFoundPage from "../components/404/404";
import Layout from "../components/Layout/Layout";
import { NoContactsContainerStyled } from "../components/NoContacts/NoContactsStyles";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Backbone | NOT FOUND</title>
      </Head>
      <Layout>
        <NotFoundPage />
      </Layout>
    </>
  );
};

export default NotFound;
