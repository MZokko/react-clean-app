//npm: (REDUX) (AXIOS) (FIREBASE FIREBASE AUTH) (matertial ui)

import './App.css';
import Login from './components/Login/login';
//firebase import
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase/firebaseConfig';

//firebase config initialisation
const firebaseApp = firebase.initializeApp(firebaseConfig);
//Setup the providers we want to support and access the auth library
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function App() {

  const {
    user,
    signOut,
    signInWithGoogle,
  } = this.props;

  return (
    <div className="App">
      <Login/>
    </div>
  );
}
//Wrap the export of the App component using the withFirebaseAuth HOC
export default withFirebaseAuth({providers,firebaseAppAuth})(App);
