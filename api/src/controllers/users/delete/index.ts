import type { NextFunction, Request, Response } from "express";
import { UserModel } from "../../../models";
import { errorsHandler } from "../../../utils";

export const userDeleteController = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (req.user.id !== req.params.userId)
		return next(
			errorsHandler({
				statusCode: 403,
				message: "You are not allowed to delete this user",
			}),
		);

	try {
		await UserModel.findByIdAndDelete(req.params.userId);

		return res.status(200).json({ user: null, message: "Delete successful" });
	} catch (error) {
		next(error);
	}
};
