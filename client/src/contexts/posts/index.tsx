import type { IPostsModel } from "@/ts/interfaces";
import { createContext, useContext } from "react";

export const PostsModel = createContext({} as IPostsModel);
export const usePostsContext = () => useContext(PostsModel);
