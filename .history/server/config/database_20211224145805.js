const mongoose = require("mongoose");

module.exports = connectDB = async (req, res, next) => {
  try {
    await mongoose.connect(
      process.env.DBURI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      console.log(`Database connected : ${process.env.DBURI}`.cyan.bold)
    );
  } catch (error) {}
};
