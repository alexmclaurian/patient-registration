import React, { useMemo, useEffect } from 'react';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { getPatients } from './actions/patients';
import 'react-datepicker/dist/react-datepicker.css';

import Registration from './components/Registration';
import Patients from './components/Patients';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPatients());
  }, [dispatch]);

  const posts = useSelector((state) => state.patients);

  const columns = useMemo(
    () => [
      {
        Header: 'Patients',
        columns: [
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'DoB',
            accessor: 'dob',
          },
          {
            Header: 'phone',
            accessor: 'phone',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Address',
            accessor: 'address',
          },
          {
            Header: 'License',
            accessor: 'license',
          },
          {
            Header: 'apptTime',
            accessor: 'apptTime',
          },
        ],
      },
    ],
  );

  return (
    <Router>
      <div>
        <Header />
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
