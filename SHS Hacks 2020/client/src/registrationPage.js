const submit = document.querySelector('#submit')
const usernameForm = document.querySelector('#username')
const nameForm = document.querySelector('#name')
const passwordForm = document.querySelector('#password')
const intHeader = document.querySelector('#intHeader')
const interestsWrap = document.querySelector('#firstInterest')
const dropContent = document.querySelector('#intDropDown')

const stemwrap = document.querySelector('#stemwrapper')
const sportswrap = document.querySelector('#sportswrapper')
const academicwrap = document.querySelector('#academicwrapper')
const communitywrap = document.querySelector('#communitywrapper')

const stemdrop = document.querySelector('#stemDrop')
const sportsdrop = document.querySelector('#sportsDrop')
const academicdrop = document.querySelector('#academicDrop')
const communitydrop = document.querySelector('#communityDrop')

const interestSelect = document.querySelectorAll('.intclick')
const selected = document.querySelector('#selectedInterests');
let interestArr = []

let name = ''
let username = ''
let password = ''
    //overalldropdown
interestsWrap.addEventListener('mouseover', function(event) {
    dropContent.style.display = 'block';
});

interestsWrap.addEventListener('mouseout', function(event) {
    dropContent.style.display = 'none';
});

Array.from(interestSelect).forEach(dropdowns => {
    dropdowns.addEventListener('click', function(event) {
        let n = document.createElement('P')
        let t = document.createTextNode('' + dropdowns.innerHTML);
        n.appendChild(t)
        selected.appendChild(n)
        console.log(selected.children)
        interestArr.push(dropdowns.innerHTML)
    })
});

submit.addEventListener('click', function(event) {
    name = nameForm.value
    username = usernameForm.value
    password = passwordForm.value
    console.log(name + "," + username + ',' + password);
    var information = {"password":'', "interests":'', "location":"Wilmette"};
    information['password'] = password;
    information['interests'] = interestArr;
    localStorage.setItem(username, JSON.stringify(information));
});
