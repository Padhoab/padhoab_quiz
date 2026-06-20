import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged,
sendPasswordResetEmail
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { auth, db } from "./firebase.js";

import {
doc,
setDoc,
getDoc
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

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

onAuthStateChanged(auth, async (user) => {
  
if (user) {

console.log("User is logged in");

const docRef = doc(db, "users", user.uid);

const docSnap = await getDoc(docRef);

if(docSnap.exists()){

localStorage.setItem(
"testkaroab_name",
docSnap.data().name
);

}

if (
window.location.pathname.includes("login.html")
||
window.location.pathname.includes("signup.html")
)
{

window.location.href = "index.html";

}

}
else {

console.log("No user found");

if (
window.location.pathname.includes("index.html")
)
{

window.location.href = "login.html";

}

}

});

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

logoutBtn.addEventListener("click", async () => {

await signOut(auth);

window.location.href = "login.html";

});

}

window.firebaseSignOut = async function(){

await signOut(auth);

}

const forgotPassword =
document.getElementById("forgotPassword");

if(forgotPassword){

forgotPassword.addEventListener(
"click",
async ()=>{

const email =
document.getElementById("loginEmail").value;

if(email==""){

alert(
"Please enter your email address first."
);

return;

}

try{

await sendPasswordResetEmail(
auth,
email
);

alert(
"Password reset email sent successfully."
);

}

catch(error){

alert(error.message);

}

});

}
