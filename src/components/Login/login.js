import React from 'react';
import classes from './login.module.css';
//material ui
import Paper from '@material-ui/core/Paper';
import { Typography, Button } from '@material-ui/core';

const login = () => {
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Typography variant='h6'>Login</Typography>

        <div className={classes.btnContainer}>
            <Button>New account</Button>
            <Button color="primary">Connect with Facebook</Button>
            <Button color="secondary">Connect with Gmail</Button>
        </div>
        
      </Paper>
    </div>
  );
};

export default login;
