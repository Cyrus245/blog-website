const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blogDB");
const { request } = require("express");
const dotenv = require("dotenv").config();
const { PORT } = process.env;
const router = require("./routes/router");

const app = express();

app.set("view engine", "ejs");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
app.use(router);

app.listen(PORT || 3000, () => {
  console.log(`Server started on port ${PORT} `);
});
