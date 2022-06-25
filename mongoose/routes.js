const router = require("express").Router();
const contollerV2 = require("./controller");

router.get("/product", contollerV2.index);
router.get("/product/:id", contollerV2.view);
router.post("/product", contollerV2.store);
router.delete("/product/:id", contollerV2.destroy);
router.put("/product/:id", contollerV2.update);

module.exports = router;
///
