import express from "express";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_DB_URI);

const APP = express();

APP.use("/", (req, res) => {
	res.send("<b>HOLAAA</b>");
});

APP.listen(3000, () => {
	console.log("run");
});
