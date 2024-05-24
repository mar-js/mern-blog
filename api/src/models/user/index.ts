import { Schema, model } from "mongoose";

const userChema = new Schema(
	{
		username: {
			type: String,
			required: true,
			min: 3,
			max: 30,
			unique: true,
		},
		email: {
			type: String,
			requerid: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	},
);

export const UserModel = model("User", userChema);
