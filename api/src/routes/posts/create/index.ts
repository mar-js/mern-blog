import { Router } from "express";
import { postsCreateController } from "../../../controllers";
import { verifyToken } from "../../../utils";

export const postsCreateRoute = Router();

postsCreateRoute.post("/create-post", verifyToken, postsCreateController);
