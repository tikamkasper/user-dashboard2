const { Country } = require("../models/countryModel.js");

// Create country
exports.createCountry = async (req, res) => {
  try {
    const { country_name } = req.body;
    const country = await Country.create({ country_name });
    res.status(201).json({ success: true, country });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all countries
exports.getAllCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.status(200).json({ success: true, countries });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
