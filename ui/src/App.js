import React, { useMemo, useEffect, useState } from "react";
import "./App.css";
import { Controller, useForm } from "react-hook-form";
import DatePicker from 'react-datepicker'
import { useSelector } from 'react-redux';
import { getPatients } from './actions/patients'
import "react-datepicker/dist/react-datepicker.css";
import Registration from './components/Registration'
import Patients from './components/Patients'
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const dispatch = useDispatch();    
  // const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(getPatients())
    // console.log(getPatients(), 'getpatients')
    // setData();
  }, [dispatch]);

  const posts = useSelector(state => state.patients)
  console.log(posts)
 

  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
  };
  // console.log(errors);

  const columns = useMemo(
    () => [
      {
        Header: "Patient",
        columns: [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "DoB",
            accessor: "dob"
          },
          {
            Header: "phone",
            accessor: "phone"
          },
          {
            Header: "Email",
            accessor: "email",
          },
          {
            Header: "Address",
            accessor: "address",
          },
          {
            Header: "License",
            accessor: "license",
          },
          {
            Header: "apptTime",
            accessor: "apptTime",
          },
        ]
      }
    ]
  )

  return (
    <Router>
      <div>
      <Switch>
          <Route path="/patientList">
            <Patients columns={columns} data={posts} />
          </Route>
          <Route path="/">
            <Registration />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

