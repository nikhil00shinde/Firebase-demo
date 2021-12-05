// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCBGRFAmJbzzvYet7s4RtFTovWekVJtJkc",
	authDomain: "reel-62ffc.firebaseapp.com",
	projectId: "reel-62ffc",
	storageBucket: "reel-62ffc.appspot.com",
	messagingSenderId: "159320398656",
	appId: "1:159320398656:web:0f6eb37551cddb4587b8a5",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
