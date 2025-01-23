const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

//routes require
const countryRoutes = require("./routes/countryRoutes.js");
const stateRoutes = require("./routes/stateRoutes.js");
const cityRoutes = require("./routes/cityRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

//routes declaration
app.use("/api/v1/countries", countryRoutes);
app.use("/api/v1/states", stateRoutes);
app.use("/api/v1/cities", cityRoutes);
app.use("/api/v1/users", userRoutes);

// app.use("/api/v1/users", userRouter);

// http://localhost:5000/api/v1/users/register

module.exports = { app };
