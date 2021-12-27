const mongoose = require("mongoose");

module.exports = connectDB = async (req, res, next) => {
  try {
    await mongoose.connect(process.env.DBURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {}
};
