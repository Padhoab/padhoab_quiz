import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
getAuth
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyDWV6geCgQOaniVug5QmXltyy-F-Bpbu1s",

authDomain: "testkaroab-ef6a4.firebaseapp.com",

projectId: "testkaroab-ef6a4",

storageBucket: "testkaroab-ef6a4.firebasestorage.app",

messagingSenderId: "58940119640",

appId: "1:58940119640:web:e32dac1291f6e97087c82d"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
