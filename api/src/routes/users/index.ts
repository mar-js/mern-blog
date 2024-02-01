import { Router } from "express";
import { usersController } from "../../controllers";

export const usersRoute = Router();

usersRoute.get("/users", usersController);
