// building the server
const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config(); //loading the .env file so we can use it securely.
const connectDB = require("./config/database");
const serviceRoutes = require("./routes/Serviceroutes");
const reviewRoutes = require("./routes/Reviewroutes");
// Connecting to MongoDB
connectDB();
// Allows the server to read data from HTML <form> elements.
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Set EJS
app.set("view engine", "ejs");

// Directs the server to look at the Routes folder. 
app.use("/", serviceRoutes);

// Start The Server
app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port 3000");
});
app.use("/reviews", reviewRoutes);
