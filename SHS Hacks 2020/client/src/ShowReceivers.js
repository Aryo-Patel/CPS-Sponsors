var currentUsername = "IBM";
var interests = JSON.parse(localStorage.getItem(currentUsername))["interests"];

var receiverInterests = [];
var commonInterests = [];
var numOfCommonInterests = 0;
var receivers = {};


console.log(JSON.parse(localStorage.getItem(localStorage.key(0)))["isDonor"]);

//iterate through all of local storage
for (var i = 0; i < localStorage.length; i++){
    console.log("initial loop");
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
        receivers[localStorage.key(i)] = numOfCommonInterests;
        var z = document.createElement("LI");
        var t = document.createTextNode(localStorage.key(i) +" | # of Common Interests: " + numOfCommonInterests);
        z.appendChild(t);
        document.getElementById("myList").appendChild(z);

    }
}
