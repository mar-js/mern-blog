import { Router } from "express";
import { userUpdateController } from "../../../controllers";
import { verifyToken } from "../../../utils";

export const userUpdateRoute = Router();

userUpdateRoute.put("/update/:userId", verifyToken, userUpdateController);
