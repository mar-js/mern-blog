import { Schema, model } from "mongoose";

const postChema = new Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
			unique: true,
		},
		slug: {
			type: String,
			required: true,
			unique: true,
		},
		content: {
			type: String,
			required: true,
		},
		file: {
			type: String,
			default: "",
		},
		category: {
			type: String,
			default: "uncategorized",
		},
	},
	{
		timestamps: true,
	},
);

export const PostModel = model("Post", postChema);
