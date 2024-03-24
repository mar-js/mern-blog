import { Router } from "express";
import { userDeleteController } from "../../../controllers";
import { verifyToken } from "../../../utils";

export const userDeleteRoute = Router();

userDeleteRoute.delete("/delete/:userId", verifyToken, userDeleteController);
