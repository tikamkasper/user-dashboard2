const express = require("express");
const {
  createCountry,
  getAllCountry,
} = require("../controllers/countryController.js");

const router = express.Router();

router.post("/countries", createCountry);
router.get("/countries", getAllCountry);

module.exports = router;
