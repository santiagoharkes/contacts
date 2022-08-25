import { NextPage } from "next";

// Components
import CreateContactAlert from "../../../components/CreateContactAlert/CreateContactAlert";
import DeleteContactCard from "../../../components/DeleteContactCard/DeleteContactCard";
import Layout from "../../../components/Layout/Layout";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Spinner from "../../../components/Spinner/Spinner";

// Styles

// Hooks & Context
import { useRouter } from "next/router";
import useGetContact from "../../../hooks/Contacts/useGetContact";
import Head from "next/head";

// Redux

// Types

const Edit: NextPage = () => {
  const router = useRouter();
  const id: any = router.query.id;
  const { contact } = useGetContact(id);

  return (
    <>
      <Head>
        <title>Backbone | Delete Contact</title>
      </Head>
      <Layout>
        <SectionTitle title="Delete Contact" />

        {contact.isLoading && <Spinner />}

        {contact.isError && (
          <CreateContactAlert
            message={"Oops! Something went wrong. Please try again later!"}
            severity="error"
          />
        )}

        {contact.isSuccess && (
          <DeleteContactCard
            contact={{
              id: contact.data.data.id,
              firstName: contact.data.data.firstName,
              lastName: contact.data.data.lastName,
              phone: contact.data.data.phone,
              email: contact.data.data.email,
            }}
          />
        )}
      </Layout>
    </>
  );
};

export default Edit;
