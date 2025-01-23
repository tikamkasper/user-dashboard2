const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
    },
    userName: {
      type: String,
      required: [true, "User name is required !"],
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = { User };
