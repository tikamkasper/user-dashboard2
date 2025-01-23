const { User } = require("../models/userModel.js");

//create user
exports.createUser = async (req, res) => {
  try {
    const { userName, email } = req.body;
    const user = await User.create({ userName, email });
    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

//get all user
exports.getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
