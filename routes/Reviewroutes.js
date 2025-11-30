const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware/auth");
const controller = require("../Controllers/Reviewcontroller");

// View all reviews (public)
router.get("/", controller.getAllReviews);

// Add review (protected)
router.get("/add", isLoggedIn, controller.addForm);
router.post("/add", isLoggedIn, controller.addReview);

module.exports = router;
