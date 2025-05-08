const express = require("express");
const scoresRoute = express.Router();
const scoresController = require("../controllers/scoresController");

scoresRoute.get("/", scoresController.getScores);
scoresRoute.post("/check", scoresController.postCheckScore);
scoresRoute.post("/new", scoresController.postNewScore);

module.exports = scoresRoute;
