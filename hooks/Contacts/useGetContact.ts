import { useCallback } from "react";
import { useQuery } from "react-query";
import { useAxios } from "../useAxios";

const useGetContact = (id: string) => {
  const axios = useAxios();

  const getContact = useCallback(
    async (id: string) => {
      const data = await axios.get(`/contacts/${id}`);
      return data;
    },
    [axios]
  );

  const contact = useQuery(["contact", id], () => getContact(id), {
    enabled: !!id,
  });

  return {
    contact,
    getContact,
  };
};

export default useGetContact;
