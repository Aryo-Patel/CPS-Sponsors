var currentUsername = localStorage.getItem("currentUser");
var interests = JSON.parse(localStorage.getItem(currentUsername))["interests"];

var receiverInterests = [];
var commonInterests = [];
var numOfCommonInterests = 0;
var receivers = {};
var address = "";
var email = "";
var phonenum = "";
var cInt = '';

console.log(JSON.parse(localStorage.getItem(localStorage.key(0)))["isDonor"]);

//iterate through all of local storage
for (var i = 0; i < localStorage.length; i++){
    console.log("initial loop");
    cInt = "";
    //check to see if the key belongs to a donor value
    if (JSON.parse(localStorage.getItem(localStorage.key(i)))["isDonor"] == "false"){
        console.log("second loop");
        numOfCommonInterests = 0;
        receiverInterests = [];
        commonInterests = [];
        console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
        receiverInterests = JSON.parse(localStorage.getItem(localStorage.key(i)))["interests"];
        console.log(receiverInterests);
        for (var x = 0; x < interests.length; x++){
            for (var y = 0; y < receiverInterests.length; y++){
                if (interests[x] === receiverInterests[y]){
                    console.log("hello")
                    commonInterests.push(interests[x]);
                    numOfCommonInterests++;
                }
            }
        }
        if (commonInterests.length > 0){
            console.log("logging interests");
            console.log(commonInterests[0]);
            cInt += commonInterests[0];
            for (var q = 1; q < commonInterests.length; q++){
                cInt += ", ";
                cInt = cInt + commonInterests[q];
                console.log(commonInterests[q]);
            }
            console.log(cInt);
            
            bio = JSON.parse(localStorage.getItem(localStorage.key(i)))["biography"];
            address = JSON.parse(localStorage.getItem(localStorage.key(i)))["street"] + " " + JSON.parse(localStorage.getItem(localStorage.key(i)))["twoaddress"];
            email = JSON.parse(localStorage.getItem(localStorage.key(i)))["email"];
            phonenum = JSON.parse(localStorage.getItem(localStorage.key(i)))["phonenumber"];
            receivers[localStorage.key(i)] = numOfCommonInterests;
            var z = document.createElement("LI");
            var a = document.createTextNode("Name: " + localStorage.key(i));
            var b = document.createTextNode("Bio: " + bio);
            var c = document.createTextNode("Matched Interests: " + cInt);
            var d = document.createTextNode("Phone Number: " + phonenum);
            var e = document.createTextNode("Email: " + email);
            var f = document.createTextNode("Address: " + address);
            z.appendChild(a);
            z.appendChild(document.createElement("BR"));
            z.appendChild(b);
            z.appendChild(document.createElement("BR"));
            z.appendChild(c);
            z.appendChild(document.createElement("BR"));
            z.appendChild(d);
            z.appendChild(document.createElement("BR"));
            z.appendChild(e);
            z.appendChild(document.createElement("BR"));
            z.appendChild(f);
            z.appendChild(document.createElement("BR"));
            z.appendChild(document.createElement("BR"));
            document.getElementById("myList").appendChild(z);

        }
    }
}
