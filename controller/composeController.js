const Post = require("../models/post");

const getCompose = (req, res) => {
  res.render("compose");
};

const postCompose = async (req, res) => {
  const nEntry = new Post({
    title: req.body.title,
    post: req.body.post,
  });
  nEntry.save();
  res.redirect("/");
};

module.exports = { getCompose, postCompose };
