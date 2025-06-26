const express = require("express");
const metricsRoute = express.Router();
const metricsController = require("../controllers/metricsController");

metricsRoute.get("/cv", metricsController.getIncrementCV);
metricsRoute.get("/gh", metricsController.getIncrementGH);
metricsRoute.get("/li", metricsController.getIncrementLI);
metricsRoute.get("/lounge", metricsController.getIncrementLounge);
metricsRoute.get("/viva", metricsController.getIncrementViva);
metricsRoute.get("/textRPG", metricsController.getIncrementTextRPG);
metricsRoute.get("/mapQuiz", metricsController.getIncrementMapQuic);
metricsRoute.get("/shop", metricsController.getIncrementShop);

module.exports = metricsRoute;
