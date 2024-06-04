import cookieParser from "cookie-parser";
import express, { json } from "express";
import mongoose from "mongoose";
import { authRoute, postsRoute, usersRoute } from "./routes";

mongoose.connect(process.env.MONGO_DB_URI);

const APP = express();

APP.use(json());

APP.use(cookieParser());

APP.use("/api", usersRoute);

APP.use("/api", authRoute);

APP.use("/api", postsRoute);

APP.listen(3000, () => {
	console.log("run");
});
