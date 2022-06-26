const mongoose = require("mongoose");

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => console.log("server database terhubung"));

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.API_URL);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
