import type { IAction, IInitialPostsState, IPosts } from "@/ts/interfaces";

const POSTS_LOADING = "POSTS_LOADING";
const POSTS_SUCCESS = "POSTS_SUCCESS";
const POSTS_ERROR = "POSTS_ERROR";

export const postsReducer = (state: IInitialPostsState, action: IAction) => {
	const { type, payload } = action;

	if (type === POSTS_LOADING)
		return {
			...state,
			loading: payload,
			data: null,
			error: undefined,
		};

	if (type === POSTS_SUCCESS) {
		if (payload) {
			localStorage.setItem("posts", JSON.stringify(payload));
		} else {
			localStorage.removeItem("posts");
		}

		return {
			...state,
			loading: false,
			data: payload,
			error: undefined,
		};
	}

	if (type === POSTS_ERROR)
		return {
			...state,
			loading: false,
			data: null,
			error: payload,
		};

	return { ...state };
};

export const postsLoadingAction = () => ({
	type: POSTS_LOADING,
	payload: true,
});

export const postsSuccessAction = (data: IPosts | null) => ({
	type: POSTS_SUCCESS,
	payload: data,
});

export const postsErrorAction = ({ error }: { error: string }) => ({
	type: POSTS_ERROR,
	payload: error,
});
