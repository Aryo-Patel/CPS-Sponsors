if (JSON.parse(localStorage.getItem(localStorage.getItem("currentUser")))["isDonor"] == "true"){
    document.getElementById("headBio").innerHTML = "Donor";
}
else {
    document.getElementById("headBio").innerHTML = "Recipient";
}