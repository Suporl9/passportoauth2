const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  googleId: {},
  twitterId: {},
  githubId: {},
  username: {
    type: String,
    required: true,
  },
});
