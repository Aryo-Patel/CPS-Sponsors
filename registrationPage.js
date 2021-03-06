const submit = document.querySelector('#submit')
const usernameForm = document.querySelector('#username')
const nameForm = document.querySelector('#name')
const passwordForm = document.querySelector('#password')
const emailForm = document.querySelector('#email')
const phonenumberForm = document.querySelector('#phonenumber')
const streetForm = document.querySelector('#street')
const twoaddressForm = document.querySelector('#twoaddress')
const biography = document.querySelector('#bio').value
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
let checkArr = []
let isDonor = 'true'
let toggle = false;

let name = ''
let username = ''
let password = ''
let email = ''
let phonenumber = ''
let street = ''
let twoaddress = ''
    //overalldropdown


Array.from(interestSelect).forEach(dropdowns => {
    dropdowns.addEventListener('click', function(event) {
        console.log('beginning' + toggle)
        for (i = 0; i < checkArr.length; i++) {
            if (checkArr[i] == dropdowns.innerHTML) {
                toggle = true;
            }
        }
        if (!toggle) {
            console.log(checkArr)
            let n = document.createElement('P')
            let t = document.createTextNode('' + dropdowns.innerHTML);
            n.appendChild(t)
            selected.appendChild(n)
            console.log(selected.children)
            interestArr.push('' + dropdowns.innerHTML)
            checkArr.push(dropdowns.innerHTML)
        }
        toggle = false;
        console.log('ending' + toggle)
    })
});

submit.addEventListener('click', function(event) {
    email = emailForm.value
    phonenumber = phonenumberForm.value
    street = streetForm.value
    twoaddress = twoaddressForm.value
    name = nameForm.value
    username = usernameForm.value
    password = passwordForm.value
    var information = { "isDonor": '', "name": '', "password": '', "interests": '', "email": '', "phonenumber": '', "street": '', "twoaddress": '', "biography": '' };
    information['password'] = password;
    information["name"] = name;
    information["isDonor"] = isDonor;
    information['interests'] = interestArr;
    information['email'] = email;
    information['phonenumber'] = phonenumber;
    information['biography'] = biography
    information['street'] = street;
    information['twoaddress'] = twoaddress;
    localStorage.setItem(username, JSON.stringify(information));
    window.location.href='LogInPage.html';
});
