import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBgEgY67Vg9508eC3_pj57ZaUiIZpNiQ3U",
    authDomain: "retiros-bd70f.firebaseapp.com",
    projectId: "retiros-bd70f",
    storageBucket: "retiros-bd70f.appspot.com",
    messagingSenderId: "29033270579",
    appId: "1:29033270579:web:cc0bcc455e9b7c308e8246",
    measurementId: "G-ET2ELETHS4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);


