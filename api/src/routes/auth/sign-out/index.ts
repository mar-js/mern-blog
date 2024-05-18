import { Router } from "express";
import { signOutController } from "../../../controllers";

export const signOutRoute = Router();

signOutRoute.post("/signout", signOutController);
