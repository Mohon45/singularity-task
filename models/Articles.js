const mongoose = require("mongoose");

// schema design
const articlesSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for this articles."],
    },
    description: {
      type: String,
      required: [true, "Please provide a description for this articles."],
    },
    postDate: {
      type: Date,
      required: [true, "Please provide a postDate for this articles."],
    },
    reporter: {
      type: String,
      required: [true, "Please provide a reporter name for this articles."],
    },
  },
  {
    timestamps: true,
  }
);

const Articles = mongoose.model("Articles", articlesSchema);
module.exports = Articles;
