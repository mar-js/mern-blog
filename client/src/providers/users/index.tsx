import { UsersModel } from "@/contexts";
import { userReducer } from "@/helpers";
import { FC, PropsWithChildren, useReducer } from "react";

export const UsersProvider: FC<PropsWithChildren> = ({ children }) => {
	const initialState = {
		loading: false,
		user: null,
		error: undefined,
	};
	const [userState, userDispatch] = useReducer(userReducer, initialState);

	const VALUE = { userState, userDispatch };

	return <UsersModel.Provider value={VALUE}>{children}</UsersModel.Provider>;
};
