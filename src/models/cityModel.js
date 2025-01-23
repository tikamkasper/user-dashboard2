const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    countryName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
    },
    stateName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
    },
    cityName: {
      type: String,
      required: [true, "City name is required !"],
    },
  },
  { timestamps: true }
);

const City = mongoose.model("City", citySchema);
module.exports = { City };
