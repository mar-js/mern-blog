import type { NextFunction, Request, Response } from "express";

export const signOutController = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		return res.status(200).clearCookie("access_token").json({
			user: null,
			message: "Signout successful",
		});
	} catch (error) {
		next(error);
	}
};
