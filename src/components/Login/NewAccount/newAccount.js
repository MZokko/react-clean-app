import React from 'react';
//material ui
import { Typography, Button, Paper } from '@material-ui/core';

const newAccount = () => {
    return (
        <div>
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
}

export default newAccount;
