const expres = require("express");
const router = expres.Router();
const { home } = require("../controller/homeController");
const { about } = require("../controller/aboutController");
const { contact } = require("../controller/contactController");
const { getCompose, postCompose } = require("../controller/composeController");
const { getPosts, postPosts } = require("../controller/postController");

router.route("/").get(home);
router.route("/about").get(about);
router.route("/contact").get(contact);
router.route("/compose").get(getCompose).post(postCompose);
router.route("/posts/:topic").get(getPosts).post(postPosts);

module.exports = router;
