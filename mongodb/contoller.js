// const db = require("../config/mongodb");
// const { ObjectId } = require("bson");

// const index = (req, res) => {
//   db.collection("products")
//     .find()
//     .toArray()
//     .then((result) => res.send(result))
//     .catch((err) => res.send(err));
// };

// const view = (req, res) => {
//   const id = req.params.id;
//   db.collection("products")
//     .findOne({ _id: ObjectId(id) })
//     .then((result) => res.send(result))
//     .catch((err) => res.send(err));
// };

// const store = (req, res) => {
//   const { name, price, stock, status } = req.body;

//   db.collection("products")
//     .insertOne({ name, price, stock, status })
//     .then((result) => res.send(result))
//     .catch((err) => res.send(err));
// };

// const update = (req, res) => {
//   const id = req.params.id;
//   const { name, price, status, stock } = req.body;

//   db.collection("products")
//     .updateOne({ _id: ObjectId(id) }, { $set: { name, status, price, stock } })
//     .then((result) => res.send(result))
//     .catch((err) => res.send(err));
// };

// const destroy = (req, res) => {
//   const id = req.params.id;
//   db.collection("products")
//     .deleteOne({ _id: ObjectId(id) })
//     .then((result) => res.send(result))
//     .catch((err) => res.send(err));
// };

// module.exports = {
//   index,
//   view,
//   store,
//   update,
//   destroy,
// };
