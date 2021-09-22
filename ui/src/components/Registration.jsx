/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import '../App.scss';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { createPatient } from '../actions/patients';
import Confirmation from './Confirmation';

function Registration() {
  const [patientData, setPatientData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { control, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(createPatient(data));
    reset({
      name: '',
      email: '',
      address: '',
      apptTime: '',
      phone: '',
      dob: new Date(),
      license: null,
    });
    setPatientData(data);
    setSubmitted(true);
  };
  if (!submitted) {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Please register below.</h1>
        <div className="container">
          <section>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => <input type="text" placeholder="Name" {...field} />}
            />
          </section>
        </div>

        <div className="container">
          <section>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => <input type="text" placeholder="Email" {...field} />}
            />
          </section>
        </div>

        <div className="container">
          <section>
            <Controller
              name="apptTime"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => <input type="time" placeholder="Appointment Time" {...field} />}
            />
          </section>
        </div>

        <div className="container">
          <section>
            <Controller
              name="address"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => <input type="text" placeholder="Address" {...field} />}
            />
          </section>
        </div>

        <div className="container">
          <section>
            <Controller
              name="phone"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => <input type="tel" placeholder="Phone Number" {...field} />}
            />
          </section>
        </div>

        <div className="container">
          <section>
            <Controller
              name="license"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange } }) => {
                <input
                  type="file"
                  placeholder="Drivers License"
                  onChange={(e) => {
                    onChange(e.target.files);
                  }}
                />;
              }}
            />
          </section>
        </div>
        <div className="container">
          <section>
            <Controller
              name="dob"
              control={control}
              rules={{ required: true }}
              defaultValue={new Date()}
              render={({ field: { onChange, value } }) => (
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  onChange={onChange}
                  selected={value}
                />
              )}
            />
          </section>
        </div>
        <input type="submit" />
      </form>
    );
  }
  return (
    <Confirmation data={patientData} />
  );
}

export default Registration;
