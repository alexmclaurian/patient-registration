import * as api from '../api/index';

export const createPatient = (patient) => async (dispatch) => {
  console.log('disp create ')
  const { data } = await api.createPatient(patient);
  console.log('createpaitnet ', data)
  dispatch({ type: 'POST', payload: data });
};

export const getPatients = () => async (dispatch) => {
  const { data } = await api.getPatients();
  dispatch({ type: 'GET', payload: data });
};
