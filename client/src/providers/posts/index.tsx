import { PostsModel } from "@/contexts";
import { postsReducer, postsSuccessAction } from "@/helpers";
import type { IInitialPostsState, IPostsModel } from "@/ts/interfaces";
import type { FC, PropsWithChildren } from "react";
import { useEffect, useReducer } from "react";

export const PostsProvider: FC<PropsWithChildren> = ({ children }) => {
	const initialState: IInitialPostsState = {
		loading: false,
		data: null,
		error: undefined,
	};
	const [postsState, postsDispatch] = useReducer(postsReducer, initialState);
	const POSTS_STORAGE = localStorage.getItem("posts");
	const POSTS = POSTS_STORAGE && JSON.parse(POSTS_STORAGE);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (POSTS) postsDispatch(postsSuccessAction(POSTS));
	}, []);

	console.log;

	const VALUE: IPostsModel = {
		postsState,
		postsDispatch,
	};

	return <PostsModel.Provider value={VALUE}>{children}</PostsModel.Provider>;
};
