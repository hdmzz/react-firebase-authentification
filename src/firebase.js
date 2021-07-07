import firebase from "firebase/app"
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyBxm_n2GW1svKOzeV_rlbSw4_JIlFgiE2E",
    authDomain: "auth-development-358a4.firebaseapp.com",
    projectId: "auth-development-358a4",
    storageBucket: "auth-development-358a4.appspot.com",
    messagingSenderId: "580042292931",
    appId: "1:580042292931:web:3cc773951ba89ed0b56c76"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth()
export default app