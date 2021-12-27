const mongoose = require("mongoose");

module.exports = connectDB = async (req, res, next) => {
  try {
    const conn = await mongoose.connect(process.env.DBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};
