import { Router } from "express";
import { signUpRoute } from "./sign-up";

export const authRoute = Router();

authRoute.use("/auth", signUpRoute);
