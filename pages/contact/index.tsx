import { useEffect } from "react";

// Components
import ContactList from "../../components/ContactList/ContactList";
import Layout from "../../components/Layout/Layout";

// Styles

// Hooks & Context
import { useDispatch } from "react-redux";

// Redux
import { finishContactDelete } from "../../redux/slices/deleteContact";
import { finishContactEdit } from "../../redux/slices/editContact";

// Types
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(finishContactEdit());
    dispatch(finishContactDelete());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Backbone | Contacts</title>
      </Head>
      <Layout>
        <ContactList />
      </Layout>
    </>
  );
};

export default Home;
