//YOUR FIREBASE LINKS//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCUBqpRc4OVcqXGL5W5BLUUA7PQwGwtpmU",
    authDomain: "kwitter-d0bb4.firebaseapp.com",
    databaseURL: "https://kwitter-d0bb4-default-rtdb.firebaseio.com",
    projectId: "kwitter-d0bb4",
    storageBucket: "kwitter-d0bb4.appspot.com",
    messagingSenderId: "816513518756",
    appId: "1:816513518756:web:18d1466c46910b59c62a31",
    measurementId: "G-N2BM0EFEH4"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  room_name = localStorage.getItem("room_name");
  user_name = localStorage.getItem("user_name");
function send()
{
   msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
   }) ;
   document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout()
{
    localStorage.removeItem("user_name", user_name);
    localStorage.removeItem("room_name", room_name);
    
    window.location = "index.html";
}