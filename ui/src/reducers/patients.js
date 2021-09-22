const patients = (patients = [], action) => {
    switch (action.type) {
        case 'POST':
            return [...patients, action.payload];
        case 'GET':
            console.log('hit get reducer ', action)
            return action.payload;
        default:
            return patients;
    }
}

export default patients;