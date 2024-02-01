import { Router } from "express";
import { signUpRouter } from "./sign-up";

export { signUpRouter } from "./sign-up";

export const authRouter = Router();

authRouter.use("/auth", signUpRouter);
