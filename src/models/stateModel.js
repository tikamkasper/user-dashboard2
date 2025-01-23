const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema(
  {
    countryName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Country",
    },
    stateName: {
      type: String,
      required: [true, "State name is required !"],
    },
  },
  { timestamps: true }
);

const State = mongoose.model("State", stateSchema);
module.exports = { State };
