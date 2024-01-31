import { Router } from "express";

export const usersRouter = Router();

usersRouter.get("/users", (req, res) => {
	res.send("<h2>USERS</h2>");
});
