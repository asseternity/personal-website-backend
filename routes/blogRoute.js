const express = require("express");
const blogRoute = express.Router();
const blogController = require("../controllers/blogController");

blogRoute.get("/all", blogController.getAllBlogPosts);
blogRoute.post("/newcomment", blogController.postNewComment);

module.exports = blogRoute;
