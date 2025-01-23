const { Country } = require("../models/countryModel.js");

//create country
exports.createCountry = async (req, res) => {
  try {
    const { countryName } = req.body;
    const country = await Country.create({ countryName });
    res.status(201).json({ success: true, country });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

//get all country
exports.getAllCountry = async (req, res) => {
  try {
    const countries = await Country.find();
    res.status(200).json({ success: true, countries });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
