const express = require("express");
const {
  createCountry,
  getAllCountries,
} = require("../controllers/countryController.js");

const router = express.Router();

router.post("/", createCountry);
router.get("/", getAllCountries);

module.exports = router;
