import { UsersModel } from "@/contexts";
import { userReducer, userSuccessAction } from "@/helpers";
import type { IInitialUserState, IUsersModel } from "@/ts/interfaces";
import type { FC, PropsWithChildren } from "react";
import { useEffect, useReducer } from "react";

export const UsersProvider: FC<PropsWithChildren> = ({ children }) => {
	const initialState: IInitialUserState = {
		loading: false,
		data: null,
		error: undefined,
		isLogged: false,
	};
	const [userState, userDispatch] = useReducer(userReducer, initialState);
	const USER_STORAGE = localStorage.getItem("user");
	const USER = USER_STORAGE && JSON.parse(USER_STORAGE);
	const ID = (USER?.id || userState?.data?.id || "") as string;

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (USER) userDispatch(userSuccessAction(USER));
	}, []);

	const VALUE: IUsersModel = {
		userState,
		userDispatch,
		id: ID,
	};

	return <UsersModel.Provider value={VALUE}>{children}</UsersModel.Provider>;
};
