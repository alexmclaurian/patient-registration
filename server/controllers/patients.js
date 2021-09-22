const fs = require('fs');
const moment = require('moment');

const formidable = require('formidable');

const Patient = require('../models/patient');

const form = new formidable.IncomingForm();

function base64Encode(file) {
  const bitmap = fs.readFileSync(file.path);
  return new Buffer.from(bitmap).toString('base64');

}

const createPatient = async (req, res) => {
  try {
    let formLicense;
    let patientData;
    await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
          return;
        }
        formLicense = files;
        patientData = fields;
        resolve(fields);
      });
    });
    const base64str = base64Encode(formLicense.license);
    patientData['license'] = base64str;
    const convertedDate = moment(new Date(patientData.dob)).format('YYYY-MM-DD');
    patientData.dob = convertedDate;
    const patient = new Patient(patientData);
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getPatients = async (req, res) => {
  try {
    const patient = await Patient.find();
    res.status(200).json(patient);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

module.exports = { createPatient, getPatients };
