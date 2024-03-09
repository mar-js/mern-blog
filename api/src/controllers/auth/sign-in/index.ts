import { compare } from "bcrypt";
import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../../../models";
import { errorsHandler } from "../../../utils";

interface InterfaceReqBody {
	username: string;
	email: string;
	password: string;
}

export const signInController = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (!Object.entries(req.body).length)
		return next(
			errorsHandler({
				statusCode: 400,
				message: "You must complete the required information",
			}),
		);

	const { email, password } = req.body as InterfaceReqBody;

	if (!email?.length || !password?.length)
		return next(
			errorsHandler({ statusCode: 400, message: "All fields are required" }),
		);

	try {
		const findUser = await UserModel.findOne({ email });

		if (!findUser)
			return next(
				errorsHandler({ statusCode: 404, message: "User not found" }),
			);

		const findPassword = await compare(password, findUser.password);

		if (!findPassword)
			return next(
				errorsHandler({ statusCode: 400, message: "Invalid password" }),
			);

		const TOKEN = jwt.sign(
			{
				id: findUser._id,
			},
			process.env.JWT_TOKEN,
			{
				expiresIn: "5m",
			},
		);

		return res
			.status(200)
			.cookie("access_token", TOKEN, {
				httpOnly: true,
			})
			.json({
				user: {
					id: findUser._id,
					username: findUser.username,
					email: findUser.email,
					createdAt: findUser.createdAt,
					updatedAt: findUser.updatedAt,
				},
				message: "Signin successful",
			});
	} catch (error) {
		next(error);
	}
};
