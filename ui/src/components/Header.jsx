import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {location.pathname === '/patientList' && (
          <Button style={{ margin: '1em' }} color="primary">
            <NavLink exact activeClassName="active" to="/">
              Register
            </NavLink>
          </Button>
          )}
          {location.pathname === '/' && (
          <Button color="inherit">
            <NavLink exact activeClassName="active" to="/patientList">
              Admin
            </NavLink>
          </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
