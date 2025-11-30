// load the express routers
const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware/auth");
const controller = require("../Controllers/Servicecontroller");

// View the Home page (public)
router.get("/", controller.home);

// View services list (public)
router.get("/services", controller.getAll);

// Add page (protected)
router.get("/add", isLoggedIn, controller.addForm);
router.post("/add", isLoggedIn, controller.addService);

// Edit page (protected)
router.get("/edit/:id", isLoggedIn, controller.editForm);
router.post("/edit/:id", isLoggedIn, controller.updateService);

// Delete (protected)
router.get("/delete/:id", isLoggedIn, controller.deleteService);

module.exports = router;
