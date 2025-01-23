const express = require("express");
const {
  getAllStates,
  createState,
} = require("../controllers/stateController.js");

const router = express.Router();

router.post("/", createState);
router.get("/", getAllStates);

module.exports = router;
