import type { NextFunction, Request, Response } from "express";
import { PostModel } from "../../../models";
import { errorsHandler } from "../../../utils";

export const postsCreateController = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (!req.user.isAdmin)
		return next(
			errorsHandler({
				statusCode: 403,
				message: "You are not allowed to create a post",
			}),
		);

	if (!req.body.title || !req.body.content)
		return next(
			errorsHandler({
				statusCode: 400,
				message: "Please provide all required fileds",
			}),
		);

	const SLUG = req.body.title
		.split(" ")
		.join("-")
		.toLocaleLowerCase()
		.replace(/[^a-zA-Z0-9-]/g, "-");
	const newPost = new PostModel({
		...req.body,
		slug: SLUG,
		userId: req.user.id,
	});

	try {
		await newPost.save();

		res.status(201).json({
			post: newPost,
			message: "Post created",
		});
	} catch (error) {
		next(error);
	}
};
