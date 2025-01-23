const { City } = require("../models/cityModel.js");

// Create city
exports.createCity = async (req, res) => {
  try {
    const { city_name, state_id, country_id } = req.body; // Pass state and country ID
    const city = await City.create({
      city_name,
      states: state_id,
      countries: country_id,
    });
    res.status(201).json({ success: true, city });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all cities
exports.getAllCities = async (req, res) => {
  try {
    const cities = await City.find()
      .populate("states") // Populate states
      .populate("countries"); // Populate countries
    res.status(200).json({ success: true, cities });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
