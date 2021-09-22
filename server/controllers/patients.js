const Patient = require('../models/patient');

var fs = require('fs');
var moment = require('moment');

var formidable = require('formidable'),
    http = require('http'),
    util = require('util');

const form = new formidable.IncomingForm();

function base64_encode(file) {
    try {
        var bitmap = fs.readFileSync(file.path);
        }
        catch (err) {
           throw err;
    }
    return new Buffer.from(bitmap).toString('base64');
}

const createPatient = async (req, res) => {
    try {
        let formLicense;
        let patientData;
        
        await new Promise(function (resolve, reject) {
            form.parse(req, function (err, fields, files) {
                if (err) {
                    reject(err);
                    return;
                }
                formLicense = files
                patientData = fields;
                resolve(fields);
            });
        });

        var base64str = base64_encode(formLicense['license'])
        patientData['license'] = base64str;
        var convertedDate = moment(new Date(patientData['dob']) ).format('YYYY-MM-DD')
        patientData['dob'] = convertedDate;

        const patient = new Patient(patientData);
        await patient.save();
        res.status(201).json(patient);
    } catch (error) {
        console.log(error)
        res.status(400).json(error.message);
    }
}

const getPatients = async (req, res) => {
    try {
        const patient = await Patient.find();
        res.status(200).json(patient);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

module.exports = { createPatient, getPatients }