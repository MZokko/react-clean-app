import React from 'react';
import classes from './newAccount.module.css';
//material ui
import { Typography, Button, Paper } from '@material-ui/core';

const newAccount = () => {
    return (
        <div>
                  <Paper elevation={3}>
        <Typography variant='h6'>Create a new account</Typography>

        <div className={classes.btnContainer}>
            <Button color="primary">Connect with Facebook</Button>
            <Button color="secondary">Connect with Gmail</Button>
        </div>

      </Paper>
        </div>
    );
}

export default newAccount;
