const express = require("express");
const scoresRoute = express.Router();
const scoresController = require("../controllers/scoresController");

scoresRoute.get("/", scoresController.getScores);
scoresRoute.post("/", scoresController.postScore);

module.exports = scoresRoute;
