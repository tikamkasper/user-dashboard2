const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    countries: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Country",
      },
    ],
    states: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "State",
      },
    ],
    cities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "City",
      },
    ],
    user_name: {
      type: String,
      required: [true, "User name is required !"],
    },
    user_email: {
      type: String,
      required: [true, "Email is required!"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = { User };
