const Articles = require("../models/Articles");

exports.createArticlesService = async (data) => {
  const article = await Articles.create(data);
  return article;
};

exports.getArticlesService = async () => {
  const articles = await Articles.find({});
  return articles;
};
