const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: false,
  },
  twitterId: {},
  githubId: {},
  username: {
    type: String,
    required: true,
  },
});
