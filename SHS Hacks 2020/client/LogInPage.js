var userEntry = "Thingy";
var interests = ["coding", "mathematics", "machine learning"]
var information = {"password":"abc123", "interests":JSON.stringify(interests), "location":"Wilmette"};

localStorage.setItem(userEntry, JSON.stringify(information));


var numAttempts = 3;

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (localStorage.getItem(username) === null){
        alert("That username does not exist");
    }
    else if (password == JSON.parse(localStorage.getItem(username))["password"]){
        alert("Login Successful");
        console.log("hello");
        console.log(window.location);
        window.location = "http://localhost:8080" //This is going to redirect them to another page
        return false;
    }
    else{
        numAttempts--;
        alert("You have " + numAttempts + " attempts left");
        if (numAttempts == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }

}
