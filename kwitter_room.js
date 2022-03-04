// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3A0Tx9-J_xHvCfWnu2lbGpBmMFtXdEo8",
    authDomain: "class93-7373f.firebaseapp.com",
    databaseURL: "https://class93-7373f-default-rtdb.firebaseio.com",
    projectId: "class93-7373f",
    storageBucket: "class93-7373f.appspot.com",
    messagingSenderId: "519214144289",
    appId: "1:519214144289:web:e123d90e362c125a35bc60"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
