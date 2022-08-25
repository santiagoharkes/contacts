import React, { useEffect } from "react";

// Components
import { Alert, Pagination } from "@mui/material";
import Filters from "../Filters/Filters";
import NoContacts from "../NoContacts/NoContacts";
import SectionTitle from "../SectionTitle/SectionTitle";
import Spinner from "../Spinner/Spinner";
import Header from "../Table/Header/Header";
import Row from "../Table/Row/Row";
import Table from "../Table/Table";

// Styles
import { PaginationContainerStyled } from "./ContactStyles";

// Hooks & Context
import { useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { useContacts } from "../../context/Contacts/CategoriesContext";
import useFilters from "../../hooks/Contacts/useFilters";
import useGetContacts from "../../hooks/Contacts/useGetContacts";

// Redux
import { setCurrentPage } from "../../redux/slices/filterContacts";

export type RowData = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const ContactList = () => {
  const {
    contacts: contactsData,
    filteredContacts,
    getContacts,
  } = useGetContacts();
  const { contactsState, contactsActions } = useContacts();
  const {
    contact,
    hasFilters,
    currentPage: filteredCurrentPage,
  } = useFilters();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const contacts = hasFilters ? filteredContacts : contactsData;
  const currentPage = hasFilters
    ? filteredCurrentPage
    : contactsState.currentPage;

  const totalPages = contacts.isSuccess && contacts.data.data.totalPages;

  const onNextPageHandler = (e: React.ChangeEvent<unknown>, value: number) => {
    if (hasFilters) {
      dispatch(setCurrentPage(value));
    } else {
      contactsActions.setCurrentPage(value);
    }
  };

  const headerData = [
    {
      id: "firstName",
      name: "First Name",
    },
    {
      id: "lastName",
      name: "Last Name",
    },
    {
      id: "phone",
      name: "Phone",
    },
    {
      id: "email",
      name: "Email",
    },
    {
      id: "options",
      name: "Options",
    },
  ];

  const rowData = contacts.isSuccess
    ? contacts.data.data.results.map((contact: any) => ({
        id: contact.id,
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        phone: contact.phone,
      }))
    : [];

  useEffect(() => {
    if (contacts.isSuccess) {
      if (currentPage < totalPages && totalPages !== 1) {
        const nextPage = currentPage + 1;

        queryClient.prefetchQuery(
          ["contacts", nextPage, contact],
          () => getContacts({ page: nextPage, ...contact }),
          {
            staleTime: 60 * 1000 * 5,
          }
        );
      }
    }
  }, [
    totalPages,
    contactsState.currentPage,
    getContacts,
    queryClient,
    contacts,
    contact,
    hasFilters,
    currentPage,
  ]);

  return (
    <>
      <SectionTitle title="Contacts" />

      {contacts.isLoading && <Spinner />}

      {contacts.isError && (
        <Alert severity={"error"}>
          {"Sorry, we couldn't find what you're looking for."}
        </Alert>
      )}

      {contacts.isSuccess && (
        <>
          <Filters />

          {rowData.length > 0 ? (
            <>
              <Table>
                <Header headerData={headerData} />
                {rowData.map((rowData: RowData) => (
                  <Row
                    key={rowData.id}
                    rowData={rowData}
                    headerData={headerData}
                  />
                ))}
              </Table>

              {totalPages !== 1 && (
                <PaginationContainerStyled>
                  <Pagination
                    count={Math.ceil(
                      contacts.data.data.count / contacts.data.data.perPage
                    )}
                    page={contacts.data.data.currentPage}
                    onChange={onNextPageHandler}
                    variant="outlined"
                    shape="rounded"
                  />
                </PaginationContainerStyled>
              )}
            </>
          ) : (
            <NoContacts />
          )}
        </>
      )}
    </>
  );
};

export default ContactList;
