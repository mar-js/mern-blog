import { hashSync } from "bcrypt";
import type { NextFunction, Request, Response } from "express";
import { UserModel } from "../../../models";
import { errorsHandler } from "../../../utils";

export const userUpdateController = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (req.user.id !== req.params.userId)
		return next(
			errorsHandler({
				statusCode: 403,
				message: "You are not allowed to update this user",
			}),
		);

	if (req.body.username) {
		if (req.body.username.length < 2 || req.body.username.length > 20)
			return next(
				errorsHandler({
					statusCode: 400,
					message: "Username must be between 7 and 20 characters",
				}),
			);

		if (req.body.username.includes(" "))
			return next(
				errorsHandler({
					statusCode: 400,
					message: "Username cannot contain spaces",
				}),
			);

		/*
		if (req.body.username !== req.body.username.toLocaleLowerCase())
			return next(
				errorsHandler({
					statusCode: 400,
					message: "Username must be lowercase",
				}),
			);
		*/

		if (!req.body.username.match(/^[a-zA-Z0-9]+$/))
			return next(
				errorsHandler({
					statusCode: 400,
					message: "Username can only contain letters and numbers",
				}),
			);
	}

	if (req.body.email) {
		if (!req.body.email.match(/^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i))
			return next(
				errorsHandler({
					statusCode: 400,
					message: "The email must be a valid email, for example: joe@doe.com",
				}),
			);
	}

	if (req.body.password) {
		if (req.body.password.length < 6)
			return next(
				errorsHandler({
					statusCode: 400,
					message: "Password must be at least 6 characters",
				}),
			);

		req.body.password = hashSync(req.body.password, 10);
	}

	try {
		const updatedUser = await UserModel.findByIdAndUpdate(
			req.params.userId,
			{
				$set: {
					username: req.body.username,
					email: req.body.email,
					password: req.body.password,
				},
			},
			{ new: true },
		);
		const { _id, username, email, createdAt, updatedAt } = updatedUser._doc;

		return res.status(201).json({
			user: { id: _id, username, email, createdAt, updatedAt },
			message: "Update successful",
		});
	} catch (error) {
		next(error);
	}
};
