const mongoose = require("mongoose");

module.exports = connectDB = async (req, res, next) => {
  try {
    const conn = await mongoose.connect(
      process.env.DBURI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      console.log(
        // `Database connected : ${process.env.DBURI}`.cyan.underline.bold
        "fe"
      )
    );
  } catch (error) {
    console.log(error);
  }
};
