import express from "express";
import mongoose from "mongoose";

mongoose.connect(
	"mongodb+srv://mar:mar@mern-blog.fsgs44o.mongodb.net/mern-blog?retryWrites=true&w=majority",
);

const APP = express();

APP.use("/", (req, res) => {
	res.send("<b>HOLAAA</b>");
});

APP.listen(3000, () => {
	console.log("run");
});
