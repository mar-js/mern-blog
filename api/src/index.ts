import express from "express";

const APP = express();

APP.use("/", (req, res) => {
	res.send("<b>HOLAAA</b>");
});

APP.listen(3000, () => {
	console.log("run");
});
