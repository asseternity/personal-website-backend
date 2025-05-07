// dependencies
require("dotenv").config();
const express = require("express");
const path = require("node:path");
const app = express();
const scoresRoute = require("./routes/scoresRoute");
const metricsRoute = require("./routes/metricsRoute");
const cors = require("cors");

// cors
const corsOptions = {
  origin: ["https://asseternity.github.io", "http://localhost:5173"],
  credentials: true,
  methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.options(/.*/, cors(corsOptions));

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

// [_] bug: on any further games, score stays at 0 in frontend
// [_] bug: on any further games, sometimes obstacles double spawn in frontend
// [_] bug: on any further games, it says "start game" even when you died already once
// cause of the above - Phaser is not being cleanly reset between sessions.
// [_] have scores show at restart
// [_] let the username field not be unique
// [_] write in your name field if the score is top 5
// [_] remove the non top 5 records
