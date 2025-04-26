const express = require("express");
const metricsRoute = express.Router();
const metricsController = require("../controllers/metricsController");

metricsRoute.get("/cv", metricsController.getIncrimentCV);
metricsRoute.get("/gh", metricsController.getIncrimentGH);
metricsRoute.get("/li", metricsController.getIncrimentLI);

module.exports = metricsRoute;
