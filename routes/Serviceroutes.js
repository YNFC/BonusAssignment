// load the express routers
const express = require("express");
const router = express.Router();
const controller = require("../Controllers/Servicecontroller");
// View the Home page (This is the route)
router.get("/", controller.home);
// View the services (This is the route)
router.get("/services", controller.getAll);
// View the Add page(This is the route)
router.get("/add", controller.addForm);
router.post("/add", controller.addService);
// Edit button(This is the route)
router.get("/edit/:id", controller.editForm);
router.post("/edit/:id", controller.updateService);
// Delete button(This is the route)
router.get("/delete/:id", controller.deleteService);
module.exports = router;
