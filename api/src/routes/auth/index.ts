import { Router } from "express";
import { signInRoute } from "./sign-in";
import { signUpRoute } from "./sign-up";

export const authRoute = Router();

authRoute.use("/auth", signUpRoute);
authRoute.use("/auth", signInRoute);
