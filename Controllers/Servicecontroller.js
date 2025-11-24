const Service = require("../models/Service");
// Home page
exports.home = (req, res) => {
    res.render("home");
};
// View all services/ maintinence records already put in. Sorts it from newest to oldest. 
exports.getAll = async (req, res) => {
    const services = await Service.find().sort({ date: -1 });
    res.render("services", { services });
};
// Add form page( add any maintenince records you want to)
exports.addForm = (req, res) => {
    res.render("add");
};
// Add service( The add service form)
exports.addService = async (req, res) => {
    await Service.create(req.body);
    res.redirect("/services");
};
// Edit form page( Edit the entries you have already put)
exports.editForm = async (req, res) => {
    const service = await Service.findById(req.params.id);
    res.render("edit", { service });
};
// Updating a service(saving the new information given.)
exports.updateService = async (req, res) => {
    await Service.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/services");
};
// Delete a service ( delete a service you had once posted.)
exports.deleteService = async (req, res) => {
    await Service.findByIdAndDelete(req.params.id);
    res.redirect("/services");
};
