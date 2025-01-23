const express = require("express");
const { createCity, getAllcity } = require("../controllers/cityController.js");

const router = express.Router();

router.post("/", createCity);
router.get("/", getAllcity);

module.exports = router;
