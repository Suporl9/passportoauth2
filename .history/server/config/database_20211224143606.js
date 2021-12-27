const mongoose = require("mongoose");

module.exports = connectDB = async (req, res, next) => {
  try {
    await mongoose.connect();
  } catch (error) {}
};
