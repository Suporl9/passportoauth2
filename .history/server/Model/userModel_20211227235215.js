const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: false,
  },
  twitterId: {
    type: String,
    required: false,
  },
  githubId: { type: String },
  username: {
    type: String,
    required: true,
  },
});
