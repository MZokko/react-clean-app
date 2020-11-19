import React from 'react';
import classes from './login.module.css';
//material ui
import Paper from '@material-ui/core/Paper';
import { Typography, Button } from '@material-ui/core';
//firebase firebase auth
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

//create a new user in db with token of fb or google

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
