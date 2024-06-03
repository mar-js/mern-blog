import { Router } from "express";
import { postsCreateRoute } from "./create";

export const postsRoute = Router();

postsRoute.use("/posts", postsCreateRoute);
