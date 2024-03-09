import { hashSync } from "bcrypt";
import type { NextFunction, Request, Response } from "express";
import { UserModel } from "../../../models";
import { errorsHandler } from "../../../utils";

interface InterfaceReqBody {
	username: string;
	email: string;
	password: string;
}

export const signUpController = async (
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

	const { email, password, username } = req.body as InterfaceReqBody;

	if (!email?.length || !password?.length || !username?.length)
		return next(
			errorsHandler({
				statusCode: 400,
				message: "All fields are required",
			}),
		);

	const newUser = new UserModel({
		email,
		password: hashSync(password, 10),
		username,
	});

	try {
		await newUser.save();

		return res.status(201).json({ message: "Signup successful" });
	} catch (error) {
		next(error);
	}
};
