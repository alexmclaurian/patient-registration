const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: String,
    email: String,
    apptTime: String,
    address: String,
    phone: String,
    license: String,
    dob: String
}, { timestamps: true });

const Patient = mongoose.model('patient', patientSchema);

module.exports = Patient;