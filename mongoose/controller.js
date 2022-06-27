const Product = require("./model");

const index = (req, res) => {
  const { name } = req.query;

  if (name) {
    Product.find({ name: { $regex: name } })
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  } else {
    Product.find()
      .then((result) => res.send(result))
      .catch((err) => res.send(err));
  }
};

const view = (req, res) => {
  const id = req.params.id;

  Product.findById(id)
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

const store = (req, res) => {
  const { name, price, stock, status } = req.body;

  Product.create({
    name,
    price,
    stock,
    status,
  })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

const update = (req, res) => {
  const id = req.params.id;
  const { name, price, stock, status } = req.body;

  Product.findByIdAndUpdate(id, {
    name,
    price,
    stock,
    status,
  })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

const destroy = (req, res) => {
  const id = req.params.id;
  Product.findByIdAndDelete(id)
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
};

module.exports = {
  index,
  store,
  view,
  destroy,
  update,
};
