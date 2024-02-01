import { Request, Response } from "express";

export const signUpController = async (req: Request, res: Response) => {
	console.log(req.body);
};
