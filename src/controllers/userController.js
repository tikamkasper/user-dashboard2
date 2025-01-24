const { User } = require("../models/userModel.js");

// Create user
exports.createUser = async (req, res) => {
  try {
    const { user_name, user_email, country_id, state_id, city_id } = req.body; // Pass references
    const user = await User.create({
      user_name,
      user_email,
      countries: country_id,
      states: state_id,
      cities: city_id,
    });
    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .populate("countries") // Populate countries
      .populate("states") // Populate states
      .populate("cities"); // Populate cities
    const usersCount = users.length;
    res.status(200).json({ success: true, usersCount, users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
