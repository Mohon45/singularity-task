const {
  getArticlesService,
  createArticlesService,
} = require("../services/article.services");

exports.createArticle = async (req, res) => {
  try {
    const article = await createArticlesService(req.body);

    res.status(201).json({
      status: "success",
      data: article,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't create the article",
      error: error.message,
    });
  }
};

exports.getNewspaper = async (req, res) => {
  try {
    const articles = await getArticlesService();

    res.status(200).json({
      status: "success",
      data: articles,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "can't get the data",
      error: error.message,
    });
  }
};
