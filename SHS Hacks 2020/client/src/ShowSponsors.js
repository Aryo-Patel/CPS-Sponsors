var currentUsername = "fennelmaster";
var interests = JSON.parse(localStorage.getItem(currentUsername))["interests"];

var sponsorInterests = [];
var commonInterests = [];
var numOfCommonInterests = 0;
var sponsors = {};
var address = "";
var email = "";
var phonenum = "";

console.log(JSON.parse(localStorage.getItem(localStorage.key(0)))["isDonor"]);

//iterate through all of local storage
for (var i = 0; i < localStorage.length; i++){
    console.log("initial loop");
    //check to see if the key belongs to a donor value
    
    if (JSON.parse(localStorage.getItem(localStorage.key(i)))["isDonor"] == "true"){
        console.log("second loop");
        numOfCommonInterests = 0;
        sponsorInterests = [];
        commonInterests = [];
        console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
        sponsorInterests = JSON.parse(localStorage.getItem(localStorage.key(i)))["interests"];
        console.log(sponsorInterests);
        for (var x = 0; x < interests.length; x++){
            for (var y = 0; y < sponsorInterests.length; y++){
                if (interests[x] === sponsorInterests[y]){
                    console.log("hello")
                    commonInterests.push(interests[x]);
                    numOfCommonInterests++;
                }
            }
        }
        address = JSON.parse(localStorage.getItem(localStorage.key(i)))["street"] + " " + JSON.parse(localStorage.getItem(localStorage.key(i)))["twoaddress"];
        email = JSON.parse(localStorage.getItem(localStorage.key(i)))["email"];
        phonenum = JSON.parse(localStorage.getItem(localStorage.key(i)))["phone"];
        sponsors[localStorage.key(i)] = numOfCommonInterests;

        var z = document.createElement("LI");
        var t = document.createTextNode(localStorage.key(i) +" | # of Common Interests: " + numOfCommonInterests + " | Email: " + email + " | Address: " + address + " | Phone Number: " + phonenum);
        z.appendChild(t);
        document.getElementById("myList").appendChild(z);
        

    }
}
