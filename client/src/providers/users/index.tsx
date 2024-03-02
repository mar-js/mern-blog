import { UsersModel } from "@/contexts";
import { userReducer, userSuccessAction } from "@/helpers";
import {
	FC,
	PropsWithChildren,
	useEffect,
	useLayoutEffect,
	useReducer,
} from "react";

export const UsersProvider: FC<PropsWithChildren> = ({ children }) => {
	const initialState = {
		loading: false,
		data: null,
		error: undefined,
		isLogged: false,
	};
	const [userState, userDispatch] = useReducer(userReducer, initialState);

	useLayoutEffect(() => {
		const user = localStorage.getItem("user");

		if (user) {
			const USER = JSON.parse(user);

			userDispatch(userSuccessAction(USER));
		}
	}, []);

	useEffect(() => {
		if (userState.isLogged) {
			const { username, email } = userState.data.user;

			localStorage.setItem(
				"user",
				JSON.stringify({ user: { username, email } }),
			);
		}
	}, [userState.isLogged, userState.data]);

	const VALUE = { userState, userDispatch };

	return <UsersModel.Provider value={VALUE}>{children}</UsersModel.Provider>;
};
