// Components
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";

// Types
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Backbone | Challenge</title>
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default Home;
