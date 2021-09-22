import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button style={{ margin: '1em' }} color="primary">
            <NavLink exact activeClassName="active" to="/">
              Register
            </NavLink>
          </Button>

          <Button color="inherit">
            <NavLink exact activeClassName="active" to="/patientList">
              Admin
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
