const express = require("express");
const app = express();
require("colors");
require("dotenv").config();

const PORT = 5000;

app.get("/", (req, res, next) => {
  res.send("tthis is a default request");
});

app.listen(PORT || 5000, () =>
  console.log(`server running on ${process.env.PORT}`.yellow.bold)
);
