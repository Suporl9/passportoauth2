const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/database");
require("colors");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID =
  "891260703267-uqvikpdfjiv29fg20k38dvsopmd86a0k.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
// console.log(passport);

// require("dotenv").config();
dotenv.config({ path: "./config/config.env" });
// console.log(process.env.SESSION_SECRET);

//connect with mongodb database

connectDB();
// const PORT = 5000;

app.use(express.json()); //this recognizes the incoming request object as json objec // wihout this we cant see what is inside req.body //

app.use(express.urlencoded({ extended: true })); //this recognizes incoming object as string or array object // we cant see strings orarray inside req.body if there is string inside it

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize()); //initialize middleware in required to initialize passport

app.use(passport.session()); //since our express app uses express session we'll have to use this  //this woould be optinal if there wasnot express session

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://localhost:5000/api/auth/google/callback",
//     },
//     function (accessToken, refreshToken, profile, cb) {
//       User.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return cb(err, user);
//       });
//     }
//   )
// );

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//       callbackURL: "http://www.example.com/auth/google/callback",
//     },
//     function (accessToken, refreshToken, profile, cb) {
//       User.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return cb(err, user);
//       });
//     }
//   )
// );

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
