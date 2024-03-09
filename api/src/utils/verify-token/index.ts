import type { NextFunction, Request, Response } from "express";
import type { JsonWebTokenError } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import { errorsHandler } from "../errors-handler";

export const verifyToken = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const TOKEN = req.cookies.access_token;

	if (!TOKEN)
		return next(errorsHandler({ statusCode: 401, message: "Unauthorized" }));

	jwt.verify(TOKEN, process.env.JWT_TOKEN, (err: JsonWebTokenError, user) => {
		if (err)
			return next(errorsHandler({ statusCode: 401, message: "Unauthorized" }));

		req.user = user;

		next();
	});
};
