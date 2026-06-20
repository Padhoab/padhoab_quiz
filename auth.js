import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { auth, db } from "./firebase.js";

import {
doc,
setDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const signupBtn = document.getElementById("signupBtn");

if (signupBtn) {

signupBtn.addEventListener("click", async () => {

const name = document.getElementById("name").value;

const email = document.getElementById("email").value;

const password = document.getElementById("password").value;

try {

const userCredential = await createUserWithEmailAndPassword(
auth,
email,
password
);

const user = userCredential.user;

await setDoc(doc(db, "users", user.uid), {

name: name,

email: email,

createdAt: new Date(),

testsAttempted: 0,

totalScore: 0,

accuracy: 0

});

alert("Account created successfully!");

window.location.href = "login.html";

}

catch (error) {

alert(error.message);

}

});

}

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

loginBtn.addEventListener("click", async () => {

const email = document.getElementById("loginEmail").value;

const password = document.getElementById("loginPassword").value;

try {

await signInWithEmailAndPassword(
auth,
email,
password
);

alert("Welcome to TestKaroAB!");

window.location.href = "index.html";

}

catch(error){

alert(error.message);

}

});

}
