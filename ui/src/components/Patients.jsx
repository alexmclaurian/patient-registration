import React, { useState, useEffect, useMemo } from "react";

import "../App.css";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { getPatients } from '../actions/patients';
import { useTable, useFilters, useGlobalFilter } from "react-table";


function Patients({ columns, data }) {
  // const dispatch = useDispatch();    
  //  const [data, setData] = useState([]);
  // useEffect(() => {
  //   dispatch(getPatients())
  //   // console.log(getPatients(), 'getpatients')
  //   // setData();
  // }, [dispatch]);
  console.log('data ', data)
 
  const tableInstance = useTable({ columns, data })
 
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance
  

  
  // console.log(data)

  return (
    <table {...getTableProps()}>
    <thead>
      {// Loop over the header rows
      headerGroups.map(headerGroup => (
        // Apply the header row props
        <tr {...headerGroup.getHeaderGroupProps()}>
          {// Loop over the headers in each row
          headerGroup.headers.map(column => (
            // Apply the header cell props
            <th {...column.getHeaderProps()}>
              {// Render the header
              column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    {/* Apply the table body props */}
    <tbody {...getTableBodyProps()}>
      {// Loop over the table rows
      rows.map(row => {
        // Prepare the row for display
        prepareRow(row)
        return (
          // Apply the row props
          <tr {...row.getRowProps()}>
            {// Loop over the rows cells
            row.cells.map(cell => {
              // Apply the cell props
              return (
                <td {...cell.getCellProps()}>
                  {// Render the cell contents
                  cell.render('Cell')}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  </table>
  );
}

export default Patients;

