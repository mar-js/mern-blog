import { Router } from "express";
import { userDeleteRoute } from "./delete";
import { userUpdateRoute } from "./update";

export const usersRoute = Router();

usersRoute.use("/users", userUpdateRoute);
usersRoute.use("/users", userDeleteRoute);
