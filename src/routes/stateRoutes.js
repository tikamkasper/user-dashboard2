const express = require("express");
const {
  getAllState,
  createState,
} = require("../controllers/stateController.js");

const router = express.Router();

router.post("/", createState);
router.get("/", getAllState);

module.exports = router;
