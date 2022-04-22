//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCohizIaEUQmwgbCnwKy3kZUOzIVrkvnkM",
      authDomain: "kwitter-2-f415c.firebaseapp.com",
      databaseURL: "https://kwitter-2-f415c-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-f415c",
      storageBucket: "kwitter-2-f415c.appspot.com",
      messagingSenderId: "958361155061",
      appId: "1:958361155061:web:a6fd1376995631aad75cbc",
      measurementId: "G-BKKTVPSZDX"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);  

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function sendd() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

document.getElementById("msg").value = "";

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
