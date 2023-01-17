function logOutBtn()
{
    window.location="index.html";
}

const firebaseConfig = {
  apiKey: "AIzaSyCRyylieoE9zDki76bQACB7lJ9FNSGiHR4",
  authDomain: "letschatwebpage-7c791.firebaseapp.com",
  databaseURL: "https://letschatwebpage-7c791-default-rtdb.firebaseio.com",
  projectId: "letschatwebpage-7c791",
  storageBucket: "letschatwebpage-7c791.appspot.com",
  messagingSenderId: "713798245685",
  appId: "1:713798245685:web:7c841b2f4e46b06a24407c"
};

firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("username").innerHTML="Welcome "+user_name+"!";

function addRoom()
{
      roomName=document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomName).update({
            purpose:"adding room name"
      });
      localStorage.setItem("roomName", roomName);
      window.location="letsChatMessagePage.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - "+ Room_names);
      row="<div class='room_name'id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirecttoroomname(name)
{
      console.log(name);
      localStorage.setItem("roomName",name);
      window.location="letsChatMessagePage.html";
}
