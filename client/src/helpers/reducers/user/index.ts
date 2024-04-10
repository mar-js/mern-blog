import type { IAction, IInitialUserState } from "@/ts/interfaces";

const USER_LOADING = "USER_LOADING";
const USER_SUCCESS = "USER_SUCCESS";
const USER_ERROR = "USER_ERROR";

export const userReducer = (state: IInitialUserState, action: IAction) => {
	const { type, payload } = action;

	if (type === USER_LOADING)
		return {
			...state,
			loading: payload,
			data: null,
			error: undefined,
			isLogged: false,
		};

	if (type === USER_SUCCESS) {
		if (payload) {
			localStorage.setItem("user", JSON.stringify(payload));
		} else {
			localStorage.removeItem("user");
		}

		return {
			...state,
			loading: false,
			data: payload,
			error: undefined,
			isLogged: true,
		};
	}

	if (type === USER_ERROR)
		return {
			...state,
			loading: false,
			data: null,
			error: payload,
			isLogged: false,
		};

	return { ...state };
};

export const userLoadingAction = () => ({
	type: USER_LOADING,
	payload: true,
});

export const userSuccessAction = (data: Partial<IUser>) => ({
	type: USER_SUCCESS,
	payload: data,
});

export const userErrorAction = ({ error }: { error: string }) => ({
	type: USER_ERROR,
	payload: error,
});
