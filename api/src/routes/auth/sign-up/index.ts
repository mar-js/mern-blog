import { Router } from "express";
import { signUpController } from "../../../controllers";

export const signUpRoute = Router();

signUpRoute.post("/signup", signUpController);
