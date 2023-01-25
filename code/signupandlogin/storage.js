import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCJvzDwRoMy7pQsXOKsQZYdyjJws-ZMs7Y",
    authDomain: "user-authentication-app-94161.firebaseapp.com",
    databaseURL: "https://user-authentication-app-94161-default-rtdb.firebaseio.com",
    projectId: "user-authentication-app-94161",
    storageBucket: "user-authentication-app-94161.appspot.com",
    messagingSenderId: "710013994660",
    appId: "1:710013994660:web:65ec006e93da2766b84831"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();


document.getElementById('signUp').addEventListener('click', (e) => {

    let email = document.getElementById('Sgemail').value;
    let username = document.getElementById('name').value;
    let password = document.getElementById('Sgpassword').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            set(ref(database, 'users/' + user.uid), {
                username: username,
                email: email,
                // password: password
            })
            setTimeout(left_right, 1000);
            alert('user created!');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert('errorMessage');
            // ..
        });
})


document.getElementById('logIn').addEventListener('click', (e) => {

    let email = document.getElementById('Lgemail').value;
    let password = document.getElementById('Lgpassword').value;

    let redirection = () => {
        location.href = '/code/redirection/redirect.html';
        // document.getElementById('login_signup').style.display = 'none';
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            const date = new Date();
            update(ref(database, 'users/' + user.uid), {
                last_login: date,
                // password: password
            })
            redirection();
            alert('User loged in!');

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert('errorMessage');

        });
})
