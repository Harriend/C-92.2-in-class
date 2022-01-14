
var firebaseConfig = {
  apiKey: "AIzaSyCSO8moNsexY0UpYDVCt9JrsXv0-iyIW3w",
  authDomain: "kwitter-e02dd.firebaseapp.com",
  databaseURL: "https://kwitter-e02dd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kwitter-e02dd",
  storageBucket: "kwitter-e02dd.appspot.com",
  messagingSenderId: "1061764871063",
  appId: "1:1061764871063:web:5dbab9c37710a0dbbe4ad2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name +"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
