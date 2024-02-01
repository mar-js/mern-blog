import express, { json } from "express";
import mongoose from "mongoose";
import { authRoute, usersRoute } from "./routes";

mongoose.connect(process.env.MONGO_DB_URI);

const APP = express();

APP.use(json());

APP.use("/api", usersRoute);

APP.use("/api", authRoute);

APP.listen(3000, () => {
	console.log("run");
});
