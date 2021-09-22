const Patient = require('../models/patient');

var fs = require('fs');

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

const createPatient = async (req, res) => {
    try {
        const licenseCopy = req.body.license;
        base64_encode(licenseCopy)
        patientCopy = req.body;
        patientCopy.license = licenseCopy;
        console.log('creating ', patientCopy)
        const patient = new Patient(patientCopy);
        console.log('patient ', patient)
        await patient.save();
        res.status(201).json(patient);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const getPatients = async (req, res) => {
    try {
        console.log('get')
        const patient = await Patient.find();
        res.status(200).json(patient);
    } catch (error) {
        console.log('err')
        res.status(404).json(error.message);
    }
}

module.exports = { createPatient, getPatients }