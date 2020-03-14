const express = require("express");
const productCtrl = require("../controllers/productController");
const productMiddleware = require("../middlerwares/productMiddleware");

const router = express.Router();

router.get("/", productCtrl.getAll)
    .post("/", productCtrl.post)
    .get("/:key/:value", productMiddleware.find, productCtrl.get)
    .put("/:key/:value", productMiddleware.find, productCtrl.put)
    .delete("/:key/:value", productMiddleware.find, productCtrl.remove)

module.exports = router;
