if (JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser")))["isDonor"] == "true") {
    document.getElementById("headBio").innerHTML = "Donor";
} else {
    document.getElementById("headBio").innerHTML = "Recipient";
}
if (JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser")))["biography"] != "") {
    document.getElementById("biography").innerHTML = JSON.parse(localStorage.getItem(sessionStorage.getItem("currentUser")))["biography"];
} else {
    (document.getElementById("biography").innerHTML = "No biography available.");
}

document.getElementById("userName").innerHTML = sessionStorage.getItem("currentUser");