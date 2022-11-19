const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");
const authorization = require("../middleware/authorization");
const articleController = require("../controllers/articles.controller");

router
  .route("/article")
  .post(verifyToken, authorization("editors"), articleController.createArticle);
router
  .route("/articles")
  .get(verifyToken, authorization("editors"), articleController.getNewspaper);

module.exports = router;
