import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
const Appnavbar = () => {
  const location = useLocation();
  return (
    <div>
      <AppBar position="sticky" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ fontWeight: 800, flexGrow: 1 }}>
            Job Portal
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={Link} to="/" disabled={location.pathname === '/'}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/jobs" disabled={location.pathname === '/jobs'}>
              Jobs
            </Button>
            <Button color="inherit" component={Link} to="/about" disabled={location.pathname === '/about'}>
              About
            </Button>
            <Button color="inherit" component={Link} to="/contact" disabled={location.pathname === '/contact'}>
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Appnavbar
