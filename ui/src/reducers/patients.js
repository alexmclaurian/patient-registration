const patients = (patientList = [], action) => {
  switch (action.type) {
    case 'POST':
      return [...patientList, action.payload];
    case 'GET':
      return action.payload;
    default:
      return patientList;
  }
};

export default patients;
