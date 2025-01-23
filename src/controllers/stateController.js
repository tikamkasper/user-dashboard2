const { State } = require("../models/stateModel.js");

//create country
exports.createState = async (req, res) => {
  try {
    const { state_name } = req.body;
    const state = await State.create({ state_name });
    res.status(201).json({ success: true, state });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

//get all country
exports.getAllState = async (req, res) => {
  try {
    const states = await State.find();
    res.status(200).json({ success: true, states });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
