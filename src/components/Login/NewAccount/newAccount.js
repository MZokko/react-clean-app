import React, { useState } from 'react';
import classes from './newAccount.module.css';
//material ui
import { Typography, Button, Paper } from '@material-ui/core';
//firebase and StyledFirebaseAuth
import FirebaseAuth from 'react-firebaseui';
import firebase from 'firebase';
// import firebaseConfig from '../../../firebase/firebaseConfig';

 function NewAccount() {
  // The component's Local state.
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.


  //config firebase
  var config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_BASEURL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };
  firebase.initializeApp(config);

  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };

  return (
    <div>
      <Paper elevation={3}>
        <Typography variant='h6'>Create a new account</Typography>

        <div className={classes.btnContainer}>
          <Button color='primary'>Connect with Facebook</Button>
          <Button color='secondary'>Connect with Gmail</Button>
          <FirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />ƒ
        </div>
      </Paper>
    </div>
  );
};

export default NewAccount;
