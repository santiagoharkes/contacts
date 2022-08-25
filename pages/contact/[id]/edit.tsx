import { useEffect, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

// Components
import CreateForm from "../../../components/CreateForm/CreateForm";
import Layout from "../../../components/Layout/Layout";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

// Styles

// Hooks & Context
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import useEditContacts from "../../../hooks/Contacts/useEditContacts";
import useGetContact from "../../../hooks/Contacts/useGetContact";
import { useAxios } from "../../../hooks/useAxios";

// Redux
import {
  failContactEdit,
  setContactToEdit,
  startContactEdit,
  successContactEdit,
} from "../../../redux/slices/editContact";

// Types
import { NextPage } from "next";
import { InputState } from "../create";
import Head from "next/head";

type DataToPut = {
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  email?: string | null;
};

const Edit: NextPage = () => {
  const router = useRouter();
  const id: any = router.query.id;
  const { contact } = useGetContact(id);
  const axios = useAxios();
  const dispatch = useDispatch();
  const { contactToEdit, editMode, editFail, editLoading, editSuccess } =
    useEditContacts();
  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<InputState>({
    mode: "onBlur",
    defaultValues: useMemo(
      () => ({
        firstName: contactToEdit.firstName,
        lastName: contactToEdit.lastName,
        phone: contactToEdit.phone,
        email: contactToEdit.email,
      }),
      [contactToEdit]
    ),
  });

  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<InputState> = async (data) => {
    dispatch(startContactEdit());

    const dataToPut: DataToPut = {};

    if (data.firstName !== contact?.data?.data?.firstName) {
      dataToPut.firstName = data.firstName;
    }
    if (data.lastName !== contact?.data?.data?.lastName) {
      dataToPut.lastName = data.lastName;
    }
    if (data.phone !== contact?.data?.data?.phone) {
      dataToPut.phone = data.phone;
    }
    if (data.email !== contact?.data?.data?.email) {
      dataToPut.email = data.email;
    }

    try {
      await axios.put(`/contacts/${id}`, dataToPut);
      await queryClient.invalidateQueries(["contacts"]);

      dispatch(
        successContactEdit({
          show: true,
          message: "Contact has been edited successfully!",
        })
      );
    } catch (error: any) {
      dispatch(
        failContactEdit({
          show: true,
          message:
            error?.response?.data?.message || "Error! Please try again later",
        })
      );
    }
  };

  useEffect(() => {
    if (contact.isSuccess) {
      dispatch(
        setContactToEdit({
          firstName: contact.data.data.firstName,
          lastName: contact.data.data.lastName,
          phone: contact.data.data.phone,
          email: contact.data.data.email,
        })
      );
    }
  }, [contact.isSuccess, contact.data?.data, dispatch]);

  useEffect(() => {
    reset(contactToEdit);
  }, [contactToEdit, reset]);

  return (
    <>
      <Head>
        <title>Backbone | Edit Contact</title>
      </Head>
      <Layout>
        <SectionTitle title="Edit Contact" />

        <CreateForm
          control={control}
          errors={errors}
          reset={reset}
          getValues={getValues}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          isLoading={editLoading || contact.isLoading}
          fail={editFail}
          success={editSuccess}
        />
      </Layout>
    </>
  );
};

export default Edit;
