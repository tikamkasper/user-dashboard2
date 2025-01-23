const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

//routes require
const countryRoutes = require("./routes/countryRoutes.js");

//routes declaration
app.use("/api/v1", countryRoutes);

// app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users/register

module.exports = { app };
