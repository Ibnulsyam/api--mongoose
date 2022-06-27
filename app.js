const express = require("express");

const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.DB_PORT || 5000;
const dbConnect = require("./config/mongoose");
const routerV2 = require("./mongoose/routes");

dbConnect();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v2", routerV2);

app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: "Failed",
    massage: "Resource" + req.originalUrl + "not found",
  });
});

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server is running ${process.env.PORT}`)
);
