const linkRef = document.querySelector('#connections')
linkRef.addEventListener('click', function(event) {
    if (JSON.parse(localStorage.getItem(localStorage.getItem("currentUser")))["isDonor"] === "true"){
        window.location.href="ShowReceivers.html";
    }
    else {
        window.location.href="ShowSponsors.html";
    }
})
