const mongoose = require("mongoose");

const stateSchema = new mongoose.Schema(
  {
    countries: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Country",
        required: [true, "Country ID is required !"],
      },
    ],
    state_name: {
      type: String,
      required: [true, "State name is required !"],
    },
  },
  { timestamps: true }
);

const State = mongoose.model("State", stateSchema);
module.exports = { State };
