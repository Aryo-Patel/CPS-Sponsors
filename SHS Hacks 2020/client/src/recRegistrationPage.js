const submit = document.querySelector('#submit')
const usernameForm = document.querySelector('#rusername')
const nameForm = document.querySelector('#rname')
const passwordForm = document.querySelector('#rpassword')
const emailForm = document.querySelector('#remail')
const phonenumberForm = document.querySelector('#rphonenumber')
const streetForm = document.querySelector('#rstreet')
const twoaddressForm = document.querySelector('#rtwoaddress')
const intHeader = document.querySelector('#donHeader')
const donationsWrap = document.querySelector('#firstDonation')
const dropContent = document.querySelector('#donDropDown')

const stemwrap = document.querySelector('#stemwrapper')
const sportswrap = document.querySelector('#sportswrapper')
const academicwrap = document.querySelector('#academicwrapper')
const communitywrap = document.querySelector('#communitywrapper')

const moneyDrop = document.querySelector('#moneyDrop')
const equipmentDrop = document.querySelector('#equipmentDrop')
const volunteerDrop = document.querySelector('#volunteerDrop')

const donationSelect = document.querySelectorAll('.intclick')
const interestSelect = document.querySelectorAll('.donclick')
const selectedInt = document.querySelector('#selectedInterests');
const selected = document.querySelector('#selectedDonations');
const biography = document.querySelector('#bio').value

let type = Array.from(document.querySelectorAll('.type'))
let quant = Array.from(document.querySelectorAll('.quantity'))
let donationArr = [
    ['donation'],
    ['type'],
    ['quantity']
]
let interestArr = []
let checkArr = []
let toggle = false;

let rname = ''
let rusername = ''
let rpassword = ''
let remail = ''
let rphonenumber = ''
let rstreet = ''
let rtwoaddress = ''
    //overalldropdown

Array.from(donationSelect).forEach(dropdowns => {
    dropdowns.addEventListener('click', function(event) {
        let r = document.createElement('P')
        let n = document.createTextNode('' + dropdowns.innerHTML);
        r.appendChild(n)
        let x = document.createElement('FORM')
        if (dropdowns.id == 'equipmentText' || dropdowns.id == 'volunteerText') {
            let t = document.createElement('INPUT');
            t.setAttribute("placeholder", "Type...")
            t.setAttribute("type", "text");
            t.setAttribute("class", "type")
            x.appendChild(t)
        }
        let l = document.createElement('INPUT')
        l.setAttribute("placeholder", "Quantity...")
        l.setAttribute("type", "text")
        l.setAttribute("class", "quantity")
        x.appendChild(l)
        selected.appendChild(r)
        selected.appendChild(x)
        donationArr[0].push(dropdowns.innerHTML)
        type = Array.from(document.querySelectorAll('.type'))
        quant = Array.from(document.querySelectorAll('.quantity'))
    })
});

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
            selectedInt.appendChild(n)

            interestArr.push('' + dropdowns.innerHTML)
            checkArr.push(dropdowns.innerHTML)
        }
        toggle = false;
        console.log('ending' + toggle)
    })
});

let quantcounter = 0;
let typecounter = 0;
submit.addEventListener('click', function(event) {
    rname = nameForm.value
    rusername = usernameForm.value
    rpassword = passwordForm.value
    remail = emailForm.value
    rphonenumber = phonenumberForm.value
    rstreet = streetForm.value
    rtwoaddress = twoaddressForm.value
    for (i = 0; i < quant.length; i++) {
        console.log(type[i - quantcounter + typecounter].value)
        if (quant[i].parentNode.previousElementSibling.innerHTML == 'Money') {
            donationArr[1].push(null)

        } else {
            donationArr[1].push(type[i - quantcounter + typecounter].value)
            typecounter++;
        }
        quantcounter++;
    }

    Array.from(quant).forEach(quantity => {
        donationArr[2].push(quantity.value)
    })
    var information = { "password": '', "donations": '', "interests": '', "email": '', "phonenumber": '', "street": '', "twoaddress": '', "biography": '' };
    information['password'] = rpassword;
    information['donations'] = donationArr;
    information['interests'] = interestArr;
    information['email'] = remail;
    information['phonenumber'] = rphonenumber;
    information['street'] = rstreet;
    information['twoaddress'] = rtwoaddress;
    information['biography'] = biography
    localStorage.setItem(rusername, JSON.stringify(information));
    console.log(information)
});
/** alex */