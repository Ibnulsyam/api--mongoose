const { MongoClient } = require("mongodb");

const url = "mongodb://latihan:qwerty@localhost:27017?authSource=admin";
const client = new MongoClient(url);

async () => {
  try {
    await client.connect();
    console.log("koneksi ke mongodb berhasil");
  } catch (err) {
    console.log(err);
  }
};

const db = client.db("latihan-eduwork");

module.exports = db;
