// CONFIG FIREBASE APP
// Import the functions you need from the SDKs you need
/* eslint import/no-unresolved: [2, { ignore: ['gstatic'] }] */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBEHEoGDWfBp1Rx5J3Fnxth6Ww8EIqR-R0',
  authDomain: 'gg-girls.firebaseapp.com',
  projectId: 'gg-girls',
  storageBucket: 'gg-girls.appspot.com',
  messagingSenderId: '1012701014722',
  appId: '1:1012701014722:web:6a603567e143896a39695b',
  measurementId: 'G-GH99E43L81',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { app };
