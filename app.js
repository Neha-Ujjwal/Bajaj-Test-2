import express from "express";
import { router } from "./controlllers/post.js";
import bodyParser from "body-parser";
const app = express();
const port = process.env.PORT || 8000;

// Express Middlewares on every route
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(
	express.json({
		limit: "50mb",
	})
);

// Yest Route
app.get("/", (req, res) => {
	res.json("Hey there!");
});

// Route for the post controller
app.use("/api/v1", router);
// Exception for the route- GET
app.get("/bfhl", (req, res) => {
	res.send(
		"Please use POST method with postman and enter array of strings in the body."
	);
});

// Server Initialization
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
