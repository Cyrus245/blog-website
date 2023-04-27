const Post = require("../models/post");

const getPosts = async (req, res) => {
  const requestedId = req.params.topic;

  const result = await Post.findOne({
    _id: requestedId,
  });

  res.render("post", {
    id: requestedId,
    title: result.title,
    body: result.post,
  });
};

const postPosts = async (req, res) => {
  const postId = req.body.button;

  const result = await Post.findByIdAndRemove(
    {
      _id: postId,
    },
    {
      true: "asfasf",
    }
  );
  res.redirect("/");
};

module.exports = {
  getPosts,
  postPosts,
};
