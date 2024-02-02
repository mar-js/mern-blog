import { hashSync } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { UserModel } from "../../../models";

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
	if (typeof req.body === "undefined")
		return res
			.status(400)
			.json({ message: "You must complete the required information" });

	const { email, password, username } = req.body as InterfaceReqBody;

	if (!email?.length || !password?.length || !username?.length)
		return res.status(400).json({ message: "All fields are required" });

	const newUser = new UserModel({
		email,
		password: hashSync(password, 10),
		username,
	});

	try {
		await newUser.save();

		return res.status(200).json({ message: "Signup successful" });
	} catch (error) {
		next(error);
	}
};
