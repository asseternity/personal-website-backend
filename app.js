// dependencies
require("dotenv").config();
const express = require("express");
const path = require("node:path");
const app = express();
const scoresRoute = require("./routes/scoresRoute");
const metricsRoute = require("./routes/metricsRoute");
const cors = require("cors");

// cors
app.use(
  cors({
    origin: ["https://asseternity.github.io", "http://localhost:5173"],
    credentials: true,
  })
);
app.options("*", cors()); // Allow preflight requests for all routes

// settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mount routes
app.use("/api/scores", scoresRoute);
app.use("/api/metrics", metricsRoute);

// launch
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}!`);
});

// brainstorming
// what routes do I need?
// what do I need this to do?
// answer: hold records, give out records in a list when prompted and be able to submit records, and track the number of CV downloads, number of github and linkedin clicks

// note: expand the schema before publishing - or learn how to migrate without deleting the data
