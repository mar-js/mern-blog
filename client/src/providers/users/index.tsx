import { UsersModel } from "@/contexts";
import { userReducer } from "@/helpers";
import { FC, PropsWithChildren, useReducer } from "react";

export const UsersProvider: FC<PropsWithChildren> = ({ children }) => {
	const initialState = {
		loading: false,
		data: null,
		error: undefined,
	};
	const [userState, userDispatch] = useReducer(userReducer, initialState);

	const IS_LOGGED = Boolean(userState.data?.user);

	const VALUE = { userState, userDispatch, isLogged: IS_LOGGED };

	return <UsersModel.Provider value={VALUE}>{children}</UsersModel.Provider>;
};
