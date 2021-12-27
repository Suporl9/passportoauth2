const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/database");
require("colors");

// require("dotenv").config();
dotenv.config({ path: "./config/config.env" });

//connect with mongodb database

const hello = connectDB();
console.log(hello);
// const PORT = 5000;

app.get("/", (req, res, next) => {
  res.send("tthis is a default request");
});

app.listen(process.env.PORT || 5000, () =>
  console.log(
    `server running on ${process.env.NODE_ENVIRONMENT} on PORT ${process.env.PORT}`
      .yellow.bold
  )
);
