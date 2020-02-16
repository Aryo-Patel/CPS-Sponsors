

var numAttempts = 3;

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    localStorage.setItem("currentUser", username);
    if (localStorage.getItem(username) === null){
        alert("That username does not exist");
    }
    else if (password == JSON.parse(localStorage.getItem(username))["password"]){
        alert("Login Successful");
        console.log("hello");
        window.location = "main.html" //This is going to redirect them to another page
        window.location.localStorage.setItem(userEntry, JSON.stringify(information));
        
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
