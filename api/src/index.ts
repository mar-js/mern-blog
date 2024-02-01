import express, { json } from "express";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_DB_URI);

const APP = express();

APP.use(json());

APP.listen(3000, () => {
	console.log("run");
});
