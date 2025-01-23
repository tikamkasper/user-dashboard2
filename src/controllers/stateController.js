const { State } = require("../models/stateModel.js");

// Create state
exports.createState = async (req, res) => {
  try {
    const { state_name, country_id } = req.body; // Pass country ID in the request body
    const state = await State.create({ state_name, countries: country_id });
    res.status(201).json({ success: true, state });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all states
exports.getAllStates = async (req, res) => {
  try {
    const states = await State.find().populate("countries"); // Populate countries
    res.status(200).json({ success: true, states });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
