import React from 'react';
import classes from './login.module.css';
//material ui
import Paper from '@material-ui/core/Paper';
import { Typography, Button, TextField } from '@material-ui/core';
//firebase firebase auth


//create a new user in db with token of fb or google

const login = () => {
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <Typography variant='h6'>Login</Typography>

        <div className={classes.btnContainer}>
            <form>
                <TextField/>
                <TextField/>
                <Button></Button>
            </form>
            <Button color="primary">Login with Facebook</Button>
            <Button color="secondary">Login with Gmail</Button>
        </div>

      </Paper>
    </div>
  );
};

export default login;
