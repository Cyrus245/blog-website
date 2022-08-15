const mongoose = require('mongoose');

const postSchema = {

    title: {

        type: String,
        uppercase: false,


    },
    post: String


}

const Post = mongoose.model("Post", postSchema);

module.exports = Post;



