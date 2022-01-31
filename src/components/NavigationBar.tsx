import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import HumburgerMenu from "./HumburgerMenu.tsx";

const NavigationBar = () => {
  const theme = useTheme();
  //If screen size is less than
  const isMobile = useMediaQuery(theme.breakpoints.down("sx"));

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography 
         style={{
         width: '50%'
         }}
         variant="h5">
          Fishfry Boat Tracking
        </Typography>
         {isMobile ? (
          <HumburgerMenu />
        ) : (
        <div style={{
          width: '50%',
          display: 'flex',
          float:'right',
        }}
        >
          <Link
            style={{
              color: theme.palette.grey[100],
              fontSize: '18px',
              marginLeft: '15px',
            }}
            to="/"
          >
            DashBoard
          </Link>
          <Link 
            style={{
              color: 'white',
              fontSize: '18px',
              marginLeft: '15px',
            }}
           to="/admin">
            Admin
          </Link>
        </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
