import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
getAuth
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyAiamPQ1P0FITBgFdJ2E10_rsTtfP9qvwI",
authDomain: "testkaroab-6a803.firebaseapp.com",
projectId: "testkaroab-6a803",
storageBucket: "testkaroab-6a803.firebasestorage.app",
messagingSenderId: "526146903268",
appId: "1:526146903268:web:5b475833a690ec0600a0f1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export {auth,db};
