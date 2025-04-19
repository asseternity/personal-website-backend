// dependencies
require("dotenv").config();
const express = require("express");
const path = require("node:path");
const app = express();

// settings
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// launch
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}!`);
});

// brainstorming
// what routes do I need?
// what do I need this to do?
// answer: hold records, give out records in a list when prompted and be able to submit records

// note: expand the schema before publishing - or learn how to migrate without deleting the data
