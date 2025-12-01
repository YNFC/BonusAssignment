// building the server
const express = require("express");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();

const app = express();
const path = require("path");

// Connect to MongoDB
const connectDB = require("./config/database");
connectDB();

// Routes
const serviceRoutes = require("./routes/Serviceroutes");
const reviewRoutes = require("./routes/Reviewroutes");
const authRoutes = require("./routes/authRoutes");

// Passport config
require("./config/passport")(passport);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// EJS Setup
app.set("view engine", "ejs");



// Sessions (required for login)
app.use(
  session({
    secret: process.env.SESSION_SECRET || "supersecret123",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/", authRoutes);
app.use("/", serviceRoutes);
app.use("/reviews", reviewRoutes);

// Start The Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
