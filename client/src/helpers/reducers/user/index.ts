const USER_LOADING = "USER_LOADING";
const USER_SUCCESS = "USER_SUCCESS";
const USER_ERROR = "USER_ERROR";

export const userReducer = (state, action) => {
	const { type, payload } = action;

	if (type === USER_LOADING)
		return {
			...state,
			loading: payload,
			data: null,
			error: undefined,
		};

	if (type === USER_SUCCESS)
		return {
			...state,
			loading: false,
			data: payload,
			error: undefined,
		};

	if (type === USER_ERROR)
		return {
			...state,
			loading: false,
			data: null,
			error: payload,
		};

	return { ...state };
};

export const userLoadingAction = () => ({
	type: USER_LOADING,
	payload: true,
});

export const userSuccessAction = (data) => ({
	type: USER_SUCCESS,
	payload: data,
});

export const userErrorAction = ({ error }) => ({
	type: USER_ERROR,
	payload: error,
});

/*
export const signInParse = (initialState) => {
	const user = localStorage.getItem("user");

	if (user) {
		return parseJson(user);
	}

	return initialState;
};

function parseJson(json) {
	try {
		return JSON.parse(json);
	} catch (error) {
		console.log(error);
	}
}
*/
