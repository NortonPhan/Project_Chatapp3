
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPnpX2LbDFFvF2aoWZIpN9lefUyoodJp4",
    authDomain: "project-chat-room-cbff5.firebaseapp.com",
    databaseURL: "https://project-chat-room-cbff5-default-rtdb.firebaseio.com",
    projectId: "project-chat-room-cbff5",
    storageBucket: "project-chat-room-cbff5.appspot.com",
    messagingSenderId: "85286835796",
    appId: "1:85286835796:web:e0a6443ea3e3c38be9bfc1",
    measurementId: "G-0TEX0WJ755"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 

  function logout()
{
    window.location = "index.html";
}

username = localStorage.getItem("username");
document.getElementById("welcometag").innerHTML = username;
// Your web app's Firebase configurationds
function addRoom()
{
//'
room_name = document.getElementById("roominput").value;
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();
}

function redirectToRoomName(){
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}