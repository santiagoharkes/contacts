import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

// Components
import CreateForm from "../../components/CreateForm/CreateForm";
import Layout from "../../components/Layout/Layout";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

// Styles

// Hooks & Context
import { useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import usePostContacts from "../../hooks/Contacts/usePostContacts";
import { useAxios } from "../../hooks/useAxios";

// Redux
import {
  failContactPost,
  finishContactPost,
  startContactPost,
  successContactPost,
} from "../../redux/slices/createContact";
import { finishContactEdit } from "../../redux/slices/editContact";

// Types
import type { NextPage } from "next";
import Head from "next/head";

export type InputState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const Create: NextPage = () => {
  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<InputState>({
    mode: "onBlur",
  });
  const dispatch = useDispatch();
  const axios = useAxios();
  const { postFail, postLoading, postSuccess } = usePostContacts();

  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<InputState> = async (data) => {
    dispatch(startContactPost());

    try {
      await axios.post("/contacts", data);
      await queryClient.invalidateQueries(["contacts"]);

      dispatch(
        successContactPost({
          show: true,
          message: "Contact has been created successfully!",
        })
      );
    } catch (error: any) {
      dispatch(
        failContactPost({
          show: true,
          message:
            error?.response?.data?.message || "Error! Please try again later",
        })
      );
    }
  };

  useEffect(() => {
    dispatch(finishContactEdit());
    dispatch(finishContactPost());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Backbone | New Contact</title>
      </Head>
      <Layout>
        <SectionTitle title="New Contact" />

        <CreateForm
          control={control}
          errors={errors}
          reset={reset}
          getValues={getValues}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          isLoading={postLoading}
          fail={postFail}
          success={postSuccess}
        />
      </Layout>
    </>
  );
};

export default Create;
