var express = require("express");
var app = express();
var bodyParser = require("body-parser");
// var cors = require("cors");
var routes = require("./server/routes");

const PORT = 8000;

// app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", routes);

app.listen(PORT, () => {
	console.log("Listening to port : ", PORT);
});
