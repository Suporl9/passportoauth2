const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const cors = require("cors");
require("colors");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { serializeUser } = require("passport");

// Access-Control-Allow-Origin:" http://localhost:3000";
// const GOOGLE_CLIENT_ID =
//   "891260703267-uqvikpdfjiv29fg20k38dvsopmd86a0k.apps.googleusercontent.com";
// const GOOGLE_CLIENT_SECRET = "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";

// require("dotenv").config();
dotenv.config({ path: "./config/config.env" });
// console.log(process.env.SESSION_SECRET);
// console.log(process.env.GOOGLE_CLIENT_ID);

//connect with mongodb database

connectDB();

// const PORT = 5000;

app.use(express.json()); //this recognizes the incoming request object as json objec // wihout this we cant see what is inside req.body //

app.use(express.urlencoded({ extended: true })); //this recognizes incoming object as string or array object // we cant see strings orarray inside req.body if there is string inside it

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

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
//       callbackURL: "/api/auth/google/callback",
//     }, //this function is called on successful authentication
//     function (accessToken, refreshToken, profile, cb) {
//       User.findOrCreate({ googleId: profile.id }, function (err, user) {
//         return cb(err, user);
//       });
//     }
//   )
// );
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    }, //this function is called on successful authentication
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      done(null, profile); //done is a callback fn and in passport when we use callback it tells passport to move on and go to the next step while passing these parameters //it will take  you to passpport.serialize user
    }
  )
);

passport.serializeUser((user, done) => {
  console.log("serializeuser", user);
  // console.log(req.session.)
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log("deserailize user", user);
});

//route ttoreddirect the user to GOogle where they will authenticate
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("http://localhost:3000");
  }
);

app.post("/test", (req, res) => {
  // console.log(req.body);
  // res.send(req.body);
  res.send("send the data");
});
//second route where authnttication is processed and logs the user in,after google  redirects  the user back to the app
// app.get(
//   "/oauth2/redirect/accounts.google.com",
//   passport.authenticate("google", {
//     failureRedirect: "/api/auth/google/callback",
//     failureMessage: true,
//   }),
//   function (req, res) {
//     res.redirect("/");
//   }
// );

// app.get("/api/auth/google/callback", (req, res, next) => {
//   console.log(req.body);
//   console.log("api route called!");
//   res.send("api/auth google called");
// });
app.get("/", (req, res) => {
  res.send("helo tthis is ffinally working");
});

app.listen(process.env.PORT || 5000, () =>
  console.log(
    `server running on ${process.env.NODE_ENVIRONMENT} on PORT ${process.env.PORT}`
      .yellow.bold
  )
);
