// Initialize Firebase (add your Firebase configuration here)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle Sign Up form submission
function handleSignUp(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Check if terms are agreed
    if (!document.getElementById('terms').checked) {
        alert('You must agree to the terms and conditions.');
        return;
    }

    // Create a new user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successfully created user
            const user = userCredential.user;
            alert('Account created successfully!');
            
            // Redirect to login page after successful sign up
            window.location.href = 'login.html'; // Redirect to login page
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
}
