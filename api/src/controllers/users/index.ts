import { Request, Response } from "express";

export const usersController = (req: Request, res: Response) => {
	res.send("<h2>USERS</h2>");
};
