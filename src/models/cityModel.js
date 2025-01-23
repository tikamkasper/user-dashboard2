const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    countries: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Country",
        required: [true, "Country ID is required !"],
      },
    ],
    states: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "State",
        required: [true, "State ID is required !"],
      },
    ],
    city_name: {
      type: String,
      required: [true, "City name is required !"],
    },
  },
  { timestamps: true }
);

const City = mongoose.model("City", citySchema);
module.exports = { City };
