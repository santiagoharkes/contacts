import { createContext, useContext, useMemo } from "react";
import Axios, { AxiosInstance } from "axios";

interface AxiosProviderProps {
  children: React.ReactNode;
}

export const AxiosContext = createContext<AxiosInstance>(Axios);

export const AxiosProvider = ({ children }: AxiosProviderProps) => {
  const axios = useMemo(() => {
    const axiosInstance = Axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return axiosInstance;
  }, []);

  return (
    <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>
  );
};

export const useAxios = () => useContext(AxiosContext);
