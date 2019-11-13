import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyBa558Gxs8J_c2ezCp8AeWTvkJXAKYBeAM",
authDomain: "coursevisor.firebaseapp.com",
databaseURL: "https://coursevisor.firebaseio.com",
projectId: "coursevisor",
storageBucket: "coursevisor.appspot.com",
messagingSenderId: "578335897867",
appId: "1:578335897867:web:248b1e5c16a035e0b54a0e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
