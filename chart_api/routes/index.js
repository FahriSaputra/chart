var express = require("express");
const { login } = require("../src/controller/authController");
const { getChart } = require("../src/controller/chartController");
var router = express.Router();

/* GET home page. */
router.post("/auth", login);
router.get("/chart/:year", getChart);

module.exports = router;
