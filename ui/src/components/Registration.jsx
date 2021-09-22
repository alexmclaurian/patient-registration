import React from "react";
import "../App.css";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { createPatient } from '../actions/patients';

function Registration() {
  const { control, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch() 
  const onSubmit = (data) => {
    console.log('creating')
    dispatch(createPatient(data));
    reset({
      name:"Name",
      email:"Email",
      address: "",
      apptTime:"00:00:00",
      phone:"Phone",
      dob:new Date(),
      license:"",

    });
  };
  // console.log(errors);

  const onChange = (e) => {
    const file = e.target.files[0];
    // const storageRef = app.storage().ref()
    // const fileRef = storageRef.child(file.name)
    // fileRef.put(file).then(() => {
    //   console.log("Uploaded a file")
    // })
    console.log('file here', file)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Please register below.</h1>
      <div className="container">
      <section>
        <Controller 
          name="name"
          control={control}
          defaultValue=""
          // rules={{ required: true }}
          render={({ field }) => {
            return <input type="text" placeholder="Name" {...field} />; // ✅  
          }}
        />  
      </section>
      </div>

      <div className="container">
      <section>
        <Controller 
          name="email"
          control={control}
          defaultValue=""
          // rules={{ required: true }}
          render={({ field }) => {
            return <input type="text" placeholder="Email" {...field} />; // ✅  
          }}
        />  
      </section>
      </div>

      <div className="container">
      <section>
        <Controller 
          name="apptTime"
          control={control}
          defaultValue=""
          // rules={{ required: true }}
          render={({ field }) => {
            return <input type="time" placeholder="Appointment Time" {...field} />; // ✅  
          }}
        />  
      </section>
      </div>

      <div className="container">
      <section>
        <Controller 
          name="address"
          control={control}
          defaultValue=""
          // rules={{ required: true }}
          render={({ field }) => {
            return <input type="text" placeholder="Address" {...field} />; // ✅  
          }}
        />  
      </section>
      </div>

      <div className="container">
      <section>
        <Controller 
          name="phone"
          control={control}
          defaultValue=""
          // rules={{ required: true }}
          render={({ field }) => {
            return <input type="tel" placeholder="Phone Number" {...field} />; // ✅  
          }}
        />  
      </section>
      </div>

      <div className="container">
      <section>
        <Controller 
          name="license"
          control={control}
          defaultValue=""
          // rules={{ required: true }}
          render={({ field }) => {
            return <input type="file" placeholder="Drivers License" {...field}  onChange={onChange} />; // ✅  
          }}
        />  
      </section>
      </div>
    <div className="container">
      <section>
      <Controller
          name="dob"
          control={control}
          // rules={{ required: true }}
          defaultValue={new Date()}
          render={({ field: { onChange, value } }) => {
            return (
              <DatePicker
                onChange={onChange}
                selected={value}
              />
            );
          }}
        />
        </section>
        </div>
      <input type="submit" />

    </form>
  );
}

export default Registration;
