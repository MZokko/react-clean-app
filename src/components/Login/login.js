import React from 'react';
import classes from './login.module.css';
//axios
import axios from 'axios';
//material ui
import Paper from '@material-ui/core/Paper';
import { Typography, Button, TextField } from '@material-ui/core';

const login = () => {
    //axios
    const axios = require('axios');
  //handlers
  

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Typography variant='h6'>Login</Typography>

        <div className={classes.btnContainer}>
          <form>
            <TextField />
            <br />
            <TextField />
            <br />
            <Button>connect</Button>
            <br />
          </form>
          <Button >new account</Button>
          <Button color='primary'>Login with Facebook</Button>
          <Button color='secondary'>Login with Gmail</Button>
        </div>
      </Paper>
    </div>
  );
};

export default login;
