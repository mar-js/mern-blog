import { Router } from "express";
import { signInController } from "../../../controllers";

export const signInRoute = Router();

signInRoute.post("/signin", signInController);
