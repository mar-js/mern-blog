import { createContext, useContext } from "react";
import type { IUsersModel } from "./interface";

export const UsersModel = createContext({} as IUsersModel);
export const useUsersContext = () => useContext(UsersModel);
