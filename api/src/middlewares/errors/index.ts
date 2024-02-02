import { NextFunction, Request, Response } from "express";

export const errorsMiddleware = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const STATUS_CODE =
		(err as unknown as { statusCode: number }).statusCode || 500;
	const MESSAGE = err.message || "Internal Server Error";

	res.status(STATUS_CODE).json({
		sucess: false,
		statusCode: STATUS_CODE,
		message: MESSAGE,
	});
};
