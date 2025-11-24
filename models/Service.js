const mongoose = require("mongoose");
// this here helps us keep the entires to what we want. tells us what type
//  of entery to accept.
const ServiceSchema = new mongoose.Schema({
    serviceType: { type: String, required: true },
    cost: { type: Number, required: true },
    mileage: { type: Number, required: true },
    date: { type: Date, required: true },
    notes: { type: String }
});
module.exports = mongoose.model("Service", ServiceSchema);
