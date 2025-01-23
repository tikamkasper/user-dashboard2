const express = require("express");
const {
  createCountry,
  getAllCountry,
} = require("../controllers/countryController.js");

const router = express.Router();

router.post("/", createCountry);
router.get("/", getAllCountry);

module.exports = router;
