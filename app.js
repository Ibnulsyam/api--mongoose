require("./config/mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const routerV1 = require("./mongodb/routes");
const routerV2 = require("./mongoose/routes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1", routerV1);
app.use("/api/v2", routerV2);

app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: "Failed",
    massage: "Resource" + req.originalUrl + "not found",
  });
});

app.listen(5000, () => console.log("server: http//localhost:5000"));
