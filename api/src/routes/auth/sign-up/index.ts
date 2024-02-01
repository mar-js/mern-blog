import { Router } from "express";
import { signUpController } from "../../../controllers";

export const signUpRouter = Router();

signUpRouter.post("/signup", signUpController);
