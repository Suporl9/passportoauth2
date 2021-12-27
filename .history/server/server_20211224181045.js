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

app.use(express.json()); //this recognizes the incoming request object as json objec // wihout this we cant see what is inside req.body //

app.use(express.urlencoded({ extended: true })); //this recognizes incoming object as string or array object // we cant see strings orarray inside req.body if there is string inside it

app.post("/api/", (req, res, next) => {
  console.log(req.body);
  console.log("api route called");
  res.send(req.body);
});

app.listen(process.env.PORT || 5000, () =>
  console.log(
    `server running on ${process.env.NODE_ENVIRONMENT} on PORT ${process.env.PORT}`
      .yellow.bold
  )
);
