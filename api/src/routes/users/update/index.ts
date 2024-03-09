import { Router } from "express";
import { userUpdateController } from "../../../controllers";

export const userUpdateRoute = Router();

userUpdateRoute.put("/update/:userId", userUpdateController);
