import { useCallback } from "react";
import { useQuery } from "react-query";
import { useAxios } from "../useAxios";
import useFilters from "./useFilters";

type GetContactProps = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
};

const useGetContactsWithFilters = () => {
  const axios = useAxios();
  const { contact, hasFilters } = useFilters();

  const getFilteredContacts = useCallback(
    async ({ firstName, lastName, phone, email }: GetContactProps) => {
      let url = "/contacts";

      if (firstName) {
        url += `?firstName_contains=${firstName}`;
      }
      if (lastName) {
        url += `?lastName_contains=${lastName}`;
      }
      if (phone) {
        url += `?phone_contains=${phone}`;
      }
      if (email) {
        url += `?email_contains=${email}`;
      }

      const data = await axios.get(`${url}`);
      return data;
    },
    [axios]
  );

  const filteredContacts = useQuery(
    [
      "contacts",
      contact.firstName,
      contact.lastName,
      contact.phone,
      contact.email,
    ],
    () => getFilteredContacts(contact),
    {
      staleTime: 60 * 1000 * 5,
      enabled: !!hasFilters,
    }
  );

  return {
    filteredContacts,
    getFilteredContacts,
  };
};

export default useGetContactsWithFilters;
