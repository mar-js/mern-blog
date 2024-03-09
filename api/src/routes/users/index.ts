import { Router } from "express";
import { userUpdateRoute } from "./update";

export const usersRoute = Router();

usersRoute.use("/users", userUpdateRoute);
