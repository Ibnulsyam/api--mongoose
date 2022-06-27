const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/mongoose");
const dotenv = require("dotenv").config();
const routerV2 = require("./mongoose/routes");

const app = express();

dbConnect();

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
