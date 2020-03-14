const express = require("express");
const userCtrl = require("../controllers/userController");
const userMiddleware = require("../middlerwares/userMiddleware");

const router = express.Router();

router.get("/", userCtrl.getAll)
    .post("/", userCtrl.post)
    .get("/:key/:value", userMiddleware.find, userCtrl.get)
    .put("/:key/:value", userMiddleware.find, userCtrl.put)
    .delete("/:key/:value", userMiddleware.find, userCtrl.remove)

module.exports = router;
