const express = require("express");
const {
  createUser,
  getAllUser,
  getUserById,
} = require("../controllers/userController.js");

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUser);
router.get("/:id", getUserById);

module.exports = router;
