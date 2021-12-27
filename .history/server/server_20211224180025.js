const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/database");
require("colors");

// require("dotenv").config();
dotenv.config({ path: "./config/config.env" });

//connect with mongodb database

connectDB();
// const PORT = 5000;

// app.use(express.json());

app.use(express.urlencoded());

app.post("/api/", (req, res, next) => {
  console.log(req.body);
  console.log("api route called");
  res.send("tthis is a default request");
});

app.listen(process.env.PORT || 5000, () =>
  console.log(
    `server running on ${process.env.NODE_ENVIRONMENT} on PORT ${process.env.PORT}`
      .yellow.bold
  )
);
