const mongoose = require('mongoose');
const Post = require('./models/post');
mongoose.connect("mongodb://localhost:27017/blogDB");


const posts = [


    {
        title: "Day1",
        post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec sodales nulla. Nullam nibh eros, auctor ut tortor quis, ultrices faucibus diam. Morbi at diam nibh. Donec mollis imperdiet lectus, id congue mauris consequat vel. Donec augue ipsum, venenatis vel gravida sit amet, dictum eget mauris. Pellentesque ultrices lacus vel nunc vestibulum, ac aliquet justo viverra. Morbi porttitor euismod fringilla. Donec tincidunt odio vitae blandit laoreet. Vivamus maximus eros quis felis pulvinar cursus. Morbi rhoncus orci orci, congue rhoncus nulla blandit et. Nullam et sapien id justo consequat tristique. Sed a efficitur felis. Maecenas volutpat sapien porta bibendum ultricies. Sed dignissim mi tellus, at mollis tellus vehicula a."

    }, {
        title: "Day2",
        post: "Duis porta, ante vel pulvinar feugiat, massa quam luctus nisl, ut tincidunt neque tortor in eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam eu neque felis. Nullam tortor massa, luctus nec ultricies non, tristique in mauris. Nam vitae nunc purus. Ut pellentesque nulla non odio interdum, ac vestibulum est aliquam. Vivamus venenatis at dolor pretium congue. Vivamus et lectus quis mauris maximus lobortis. Donec accumsan luctus ex nec faucibus. Aenean maximus quam vitae urna consequat, at gravida sapien varius. Phasellus id ultrices diam. Donec est lectus, rhoncus at varius a, varius at arcu."



    }




]

Post.insertMany(posts).then(result => {

    console.log(result)
})