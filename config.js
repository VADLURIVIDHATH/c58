import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAsIJLgIs9Azf_Ufz72kGFJE4W6AT1jGaE",
    authDomain: "buzzer-app-45078.firebaseapp.com",
    databaseURL: "https://buzzer-app-45078-default-rtdb.firebaseio.com",
    projectId: "buzzer-app-45078",
    storageBucket: "buzzer-app-45078.appspot.com",
    messagingSenderId: "186889505915",
    appId: "1:186889505915:web:804dbd0df7efb85b8366de",
    measurementId: "G-R2WSYZSEEX"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
