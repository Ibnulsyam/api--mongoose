const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://latihan:qwerty@localhost:27017/eduwork-mongoosee?authSource=admin"
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("server database terhubung"));
