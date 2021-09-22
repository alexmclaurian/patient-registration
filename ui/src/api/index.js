import axios from 'axios';

const url = 'http://localhost:8000/patients';

export const createPatient = (patient) => {
  const formData = new FormData();

  Object.keys(patient).forEach((key) => {
    if (key === 'license') {
      formData.append(key, patient[key][0]);
    } else {
      formData.append(key, patient[key]);
    }
  });
  const patientCopy = { ...patient };
  [patientCopy.license] = patient.license;
  return axios.post(url, formData);
};

export const getPatients = () => axios.get(url)
  .then((patients) => patients);
