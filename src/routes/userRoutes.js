const express = require("express");
const { createUser, getAllUsers } = require("../controllers/userController.js");

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);
// router.get("/:id", getUserById);

module.exports = router;
