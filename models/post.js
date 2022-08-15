const mongoose = require('mongoose');

const postSchema = {

    title: String,
    post: String


}

const Post = mongoose.model("Post", postSchema);

module.exports = Post;