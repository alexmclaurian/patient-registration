/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import '../App.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { useTable } from 'react-table';
import PropTypes from 'prop-types';

function Patients({ columns, data }) {
  const tableInstance = useTable({ columns, data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;
  console.log(columns);
  console.log(data);
  return (
    <table {...getTableProps()}>
      <thead>
        {
        headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {
            headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {
              column.render('Header')
              }
              </th>
            ))
            }
          </tr>
        ))
        }
      </thead>
      <tbody {...getTableBodyProps()}>
        {
      rows.map((row) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {
            row.cells.map((cell) => {
              if (cell.column.id === 'license') {
                return (
                  <td {...cell.getCellProps()}>
                    <img className="license" src={`data:image/jpeg;base64,${cell.value}`} alt="license" height="100px" />
                  </td>
                );
              }
              return (
                <td {...cell.getCellProps()}>
                  {
                  cell.render('Cell')
                  }
                </td>
              );
            })
            }
          </tr>
        );
      })
      }
      </tbody>
    </table>
  );
}

Patients.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    Header: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({
      Header: PropTypes.string,
      accessor: PropTypes.string,
    })),
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    address: PropTypes.string,
    apptTime: PropTypes.string,
    dob: PropTypes.string,
    email: PropTypes.string,
    license: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
  })).isRequired,
};

export default Patients;
