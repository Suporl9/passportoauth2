const mongoose = require("mongoose");

module.exports = connectDB = async (req, res, next) => {
  try {
    // console.log(process.env.DBURI);
    // await mongoose.connect(process.env.DBURI);
  } catch (error) {}
};
