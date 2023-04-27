import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, ref, get, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

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


export const getRetiros = () => {
    const contenedodr = document.getElementById("list")
    let html = '';

    const dbRef = ref(db);

    get(child(dbRef, `Retiros/`)).then((snapshot) => {
        snapshot.forEach(doc => {
            console.log(doc.val());
            if (doc.val().Caja == "Caja Empresa") {
                html += `
              <table class="table table-striped mt-5">
                  <thead >
                      <tr id="empresa">
                          <td class="text-center">${doc.val().Caja}</td>
                          <td class="text-center">${doc.val().Nombre}</td>
                          <td class="text-center">${doc.val().CantidadARS}</td>
                          <td class="text-center">${doc.val().Cuenta}</td>
                          <td class="text-center">${doc.val().CantidadUSD} USD</td>
                      </tr>
                  </thead>
              </table>    
              `
                contenedodr.innerHTML = html;
            }
            if (doc.val().Caja == "Caja Inmueble") {
                html += `
                <table class="table table-striped mt-5">
                    <thead >
                        <tr id="inmueble">
                            <td class="text-center">${doc.val().Caja}</td>
                            <td class="text-center">${doc.val().Nombre}</td>
                            <td class="text-center">${doc.val().CantidadARS}</td>
                            <td class="text-center">${doc.val().Cuenta}</td>
                            <td class="text-center">${doc.val().CantidadUSD} USD</td>
                        </tr>
                    </thead>
                </table>    
                `
                contenedodr.innerHTML = html;
            }
            if (doc.val().Caja == "Caja Pais") {
                html += `
                  <table class="table mt-5">
                      <thead >
                        <tr id="pais">
                            <td class="text-center">${doc.val().Caja}</td>
                            <td class="text-center">${doc.val().Nombre}</td>
                            <td class="text-center">${doc.val().CantidadARS}</td>
                            <td class="text-center">${doc.val().Cuenta}</td>
                            <td class="text-center">${doc.val().CantidadUSD} USD</td>
                        </tr>
                      </thead>
                  </table>    
                  `
                contenedodr.innerHTML = html;
            }

        });
    }).catch((error) => {
        console.error(error);
    });

}