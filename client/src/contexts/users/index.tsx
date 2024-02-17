import { createContext, useContext } from "react";

export const UsersModel = createContext({});
export const useUsersContext = () => useContext(UsersModel);
