const express = require("express");
const { createUser, getAllUser } = require("../controllers/userController.js");

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUser);

module.exports = router;
