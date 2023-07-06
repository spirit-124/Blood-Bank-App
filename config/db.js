const mongoose = require("mongoose");
const colors = require("colors");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `Connected to MongoDB Database ${mongoose.connection.host}`.bgCyan.white
    );
  } catch (error) {
    console.log(`MongDb Database Error: ${error}`);
  }
};

module.exports = connectDb;
