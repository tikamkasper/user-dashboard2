const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    country_name: {
      type: String,
      required: [true, "Country name is required!"],
    },
  },
  { timestamps: true }
);

const Country = mongoose.model("Country", countrySchema);
module.exports = { Country };
