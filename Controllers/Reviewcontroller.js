const Review = require("../models/Review");
// Show all reviews
exports.getAllReviews = async (req, res) => {
    const reviews = await Review.find().sort({ date: -1 });
    res.render("reviews", { reviews });
};
// Show add page(Adds a review pops open the form for it)
exports.addForm = (req, res) => {
    res.render("addReview");
};
// Add a review
exports.addReview = async (req, res) => {
    await Review.create(req.body);
    res.redirect("/reviews");
};

