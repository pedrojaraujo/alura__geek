require("dotenv").config();

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyACjCRtqRq6d_3ou25SUJcI93f8FhWItBM",
  authDomain: "geekproject-4fa69.firebaseapp.com",
  projectId: "geekproject-4fa69",
  storageBucket: "geekproject-4fa69.appspot.com",
  messagingSenderId: "863126915377",
  appId: "1:863126915377:web:03f5b4ed6eb08ddbd1c810",
  measurementId: "G-S6YQTT79Y4",
};

const app = initializeApp(firebaseConfig);
