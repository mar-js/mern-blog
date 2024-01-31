import { Router } from "express";

export const ROUTER = Router();

ROUTER.get("/users", (req, res) => {
	res.send("<h2>USERS</h2>");
});
