// dependencies
require("dotenv").config();
const express = require("express");
const path = require("node:path");
const app = express();
const scoresRoute = require("./routes/scoresRoute");
const metricsRoute = require("./routes/metricsRoute");
const blogRoute = require("./routes/blogRoute");
const { syncBlogPosts } = require("./helper-functions/blogSync");
const cors = require("cors");

// cors
const corsOptions = {
  origin: [
    "https://asseternity.github.io",
    "http://localhost:5173",
    "https://assetn-portfolio.netlify.app",
    "https://assetn.dev",
  ],
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
app.use("/api/blog", blogRoute);

// launch
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}!`);
});

// sync blog posts
syncBlogPosts();

// brainstorming
// what routes do I need?
// what do I need this to do?
// answer: hold records, give out records in a list when prompted and be able to submit records, and track the number of CV downloads, number of github and linkedin clicks
// note: expand the schema before publishing - or learn how to migrate without deleting the data

// [v] bug: on any further games, score stays at 0 in frontend
// [v] bug: on any further games, sometimes obstacles double spawn in frontend
// [v] bug: on any further games, it says "start game" even when you died already once
// cause of the above - Phaser is not being cleanly reset between sessions.
// [v] have scores show at restart
// [v] let the username field not be unique
// [v] auto remove the non top 5 records
// [v] redo the backend - redo the postScore thing to assume that we're top 5
// [v] redo the backend - add a route to check if we're top 5
// [v] decide how the frontend will look
// [v] write in your name field if the score is top 5
// [v] redo the frontend - bug: "high scores loading..." never changes.
// solution: get the parts after the game is done completely away from phaser and into just react
// [v] redo the frontend - name writing in doesn't work
// [v] redo the frontend - only if you show the top 5 BEFORE playing does it actually show
// [v] redo the frontend - fix css
// [v] redo the frontend - w and s are blocked by phaser
// [v] redo the frontend - hovering on some buttons changes their size
// [v] hook up the metrics
// [v] animate the bird flying
// [v] make the game genuinely fun
