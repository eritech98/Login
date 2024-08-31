

import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
function Erick(req, res, next) {
	console.log("Requested Method:", req.method);
	console.log("Requested url:", req.url);
	console.log("Body: ", req.body);

	next();
}

app.use(Erick);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
	if (req.body["password"] === "erick2021") {
		res.sendFile(__dirname + "/public/secret.html");
	} else {
		res.sendFile(__dirname + "/public/loginfailed.html");
	}
});




app.listen(port, (req, res) => {
	console.log(`Listening to port ${port}`);
});
