import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCaIOV4D2gvfAQ7RqeSWIVeXSmPT6wnJdA",
  authDomain: "cart-72103.firebaseapp.com",
  databaseURL: "https://cart-72103.firebaseio.com",
  projectId: "cart-72103",
  storageBucket: "cart-72103.appspot.com",
  messagingSenderId: "90303791305",
  appId: "1:90303791305:web:0dad03ea0afd693c920d18"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

