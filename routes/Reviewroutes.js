const express = require("express");
const router = express.Router();
const controller = require("../Controllers/Reviewcontroller");
router.get("/", controller.getAllReviews);
router.get("/add", controller.addForm);
router.post("/add", controller.addReview);
module.exports = router;
