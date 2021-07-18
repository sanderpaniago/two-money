import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore'

// const clientCredentials = {
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//     privateKey: process.env.FIREBASE_PRIVATE_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
//     data
// };

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyD_YpZv2Z-25EtFlWQC0omEt_QxZLEA7fM",
        authDomain: "two-money.firebaseapp.com",
        projectId: "two-money",
        storageBucket: "two-money.appspot.com",
        messagingSenderId: "454791077049",
        appId: "1:454791077049:web:62ff7935fe5a7c3b320f68",
        measurementId: "G-42H8WXDQVS"
    })
}

export default firebase

