import express, { json } from "express";
import mongoose from "mongoose";
import { errorsMiddleware } from "./middlewares";
import { authRoute, usersRoute } from "./routes";

mongoose.connect(process.env.MONGO_DB_URI);

const APP = express();

APP.use(json());

APP.use("/api", usersRoute);

APP.use("/api", authRoute);

const errorHandlerMiddleware = (err, req, res, next) => {
	// Handle the error
	console.log("Executing error handling middleware");
	res.status(500).json({ error: "Internal Server Error" });
};

APP.use(errorHandlerMiddleware);

APP.listen(3000, () => {
	console.log("run");
});
