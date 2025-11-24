// load mongoose libraries to help connect to MongoDB
const mongoose = require("mongoose");
// loads the .env folder to keep the password hidden and not in the code. 
require("dotenv").config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected Successfully");
    } catch (err) {
        console.error("Database Connection Error:", err);
        process.exit(1);
    }
};
module.exports = connectDB;
