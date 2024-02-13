import { compare } from "bcrypt";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "../../../models";

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
		return res
			.status(400)
			.json({ message: "You must complete the required information" });

	const { email, password } = req.body as InterfaceReqBody;

	if (!email?.length || !password?.length)
		return res.status(400).json({ message: "All fields are required" });

	try {
		const findUser = await UserModel.findOne({ email });

		if (!findUser) return res.status(404).json({ message: "User not found" });

		const findPassword = await compare(password, findUser.password);

		if (!findPassword)
			return res.status(400).json({ message: "Invalid password" });

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
				user: findUser,
				message: "Signin successful",
			});
	} catch (error) {
		next(error);
	}
};
