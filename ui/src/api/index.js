import axios from 'axios';

const url = 'http://localhost:8000/patients';
// const getUrl = 'http://localhost:8000/patientList';


export const createPatient = (patient) => axios.post(url, patient);

export const getPatients = () => 
    axios.get(url)
    .then((o) => {
        return o
    })
    .catch((e) => {
    });