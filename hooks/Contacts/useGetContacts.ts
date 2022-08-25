import { useCallback } from "react";
import { useQuery } from "react-query";
import { useContacts } from "../../context/Contacts/CategoriesContext";
import { useAxios } from "../useAxios";
import useFilters from "./useFilters";

type ContactProps = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
};

type GetContactsProps = {
  page: number;
} & ContactProps;

const useGetContacts = () => {
  const axios = useAxios();
  const { contactsState } = useContacts();
  const { contact, hasFilters, currentPage } = useFilters();

  const getContacts = useCallback(
    async ({ page, firstName, lastName, phone, email }: GetContactsProps) => {
      const url = `/contacts?page=${page}`
        .concat(firstName ? `&firstName_contains=${firstName}` : ``)
        .concat(lastName ? `&lastName_contains=${lastName}` : ``)
        .concat(phone ? `&phone_contains=${phone}` : ``)
        .concat(email ? `&email_contains=${email}` : ``);

      const data = await axios.get(url);
      return data;
    },
    [axios]
  );

  const contacts = useQuery(
    ["contacts", contactsState.currentPage, contact],
    () =>
      getContacts({
        page: contactsState.currentPage,
        ...contact,
      }),
    {
      staleTime: 60 * 1000 * 5,
      enabled: !!!hasFilters,
    }
  );

  const filteredContacts = useQuery(
    ["contacts", currentPage, contact],
    () =>
      getContacts({
        page: currentPage,
        ...contact,
      }),
    {
      staleTime: 60 * 1000 * 5,
      enabled: !!hasFilters,
    }
  );

  return {
    contacts,
    filteredContacts,
    getContacts,
  };
};

export default useGetContacts;
