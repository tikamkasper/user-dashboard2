const { City } = require("../models/cityModel.js");

//create city
exports.createCity = async (req, res) => {
  try {
    const { city_name } = req.body;
    const city = await City.create({ city_name });
    res.status(201).json({ success: true, city });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

//get all city
exports.getAllcity = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json({ success: true, cities });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
