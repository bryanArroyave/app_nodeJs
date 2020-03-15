const express = require("express");
const authCtlr = require("../controllers/authController");

const router = express.Router();


router.post("/login", authCtlr);

module.exports = router;