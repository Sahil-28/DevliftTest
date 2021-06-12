import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDbPuUKYJm4SlUofolNew2_pBoUNq7M4xw",
  authDomain: "devliftapp-ee52c.firebaseapp.com",
  databaseURL: "https://devliftapp-ee52c-default-rtdb.firebaseio.com",
  projectId: "devliftapp-ee52c",
  storageBucket: "devliftapp-ee52c.appspot.com",
  messagingSenderId: "18466759020",
  appId: "1:18466759020:web:47dfc9c06eac4833871349",
  measurementId: "G-1R6LPDWY3S"
};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
