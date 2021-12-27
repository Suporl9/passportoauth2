const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const cors = require("cors");
require("colors");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const FaceBookStrategy = require("passport-facebook").Strategy;
const UserModel = require("./Model/userModel");
dotenv.config({ path: "./config/config.env" });

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

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    }, //this function is called on successful authentication
    function (accessToken, refreshToken, profile, done) {
      // done(null, profile); //done is a callback fn and in passport when we use callback it tells passport to move on and go to the next step while passing these parameters //it will take  you to passpport.serialize user
    }
  )
);

passport.serializeUser((user, done) => {
  //we serialize user and pass with user.id to put in session //it is stored in req.session.passport.user.{user}
  console.log("serializeuser", user);
  // console.log(req.session.)
  done(null, user); //the user.id is passed here and after this deserializeuser is run
});

passport.deserializeUser((user, done) => {
  //we get userid and later match the id with database and get the user object and store  in req.user
  console.log("deserailize user", user);
  return done(null, user);
});

//GOOGLE STRATEGY
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
    res.redirect("http://localhost:3000/dashboard");
  }
);

//GIthub strategy

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

app.get("/auth/github", passport.authenticate("github"));

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("http://localhost:3000/dashboard");
  }
);

//twitter strategy

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: "http://localhost:5000/auth/twitter/callback",
    },
    function (token, tokenSecret, profile, done) {
      return done(null, profile);
    }
  )
);

app.get("/auth/twitter", passport.authenticate("twitter"));

app.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("http://localhost:3000/dashboard");
  }
);

//facebook strategy

passport.use(
  new FaceBookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

app.get("/auth/facebook", passport.authenticate("facebook"));

app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("http://localhost:3000/dashboard");
  }
);

app.get("/test", (req, res) => {
  console.log("req.body");
  // res.send(req.body);
  res.send(req.user);
});

app.get("/", (req, res) => {
  res.send("helo tthis is ffinally working");
});

app.listen(process.env.PORT || 5000, () =>
  console.log(
    `server running on ${process.env.NODE_ENVIRONMENT} on PORT ${process.env.PORT}`
      .yellow.bold
  )
);
