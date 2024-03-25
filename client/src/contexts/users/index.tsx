import { createContext, useContext } from "react";

export const UsersModel = createContext({} as IUsersModel);
export const useUsersContext = () => useContext(UsersModel);
