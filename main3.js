
const firebaseConfig = {
  apiKey: "AIzaSyCRyylieoE9zDki76bQACB7lJ9FNSGiHR4",
  authDomain: "letschatwebpage-7c791.firebaseapp.com",
  databaseURL: "https://letschatwebpage-7c791-default-rtdb.firebaseio.com",
  projectId: "letschatwebpage-7c791",
  storageBucket: "letschatwebpage-7c791.appspot.com",
  messagingSenderId: "713798245685",
  appId: "1:713798245685:web:7c841b2f4e46b06a24407c"
};

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("roomName");
document.getElementById("heading_roomname").innerHTML="#"+room_name;
firebase.initializeApp(firebaseConfig);function getData() 
{ 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
      } });  }); }

getData();

function send()
{
      msg=document.getElementById("msg").value;
      console.log("message"+msg);
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      console.log("message2"+msg);
      document.getElementById("msg").value="";
}
function logOut()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomName");
      window.location.replace("index.html");
}