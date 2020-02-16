const submit = document.querySelector('#submit')
const usernameForm = document.querySelector('#rusername')
const nameForm = document.querySelector('#rname')
const passwordForm = document.querySelector('#rpassword')
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
const selected = document.querySelector('#selectedDonations');

let type = Array.from(document.querySelectorAll('.type'))
let quant = Array.from(document.querySelectorAll('.quantity'))
let donationArr = [
    ['donation'],
    ['type'],
    ['quantity']
]

let rname = ''
let rusername = ''
let rpassword = ''
    //overalldropdown
donationsWrap.addEventListener('mouseover', function(event) {
    dropContent.style.display = 'block';
});

donationsWrap.addEventListener('mouseout', function(event) {
    dropContent.style.display = 'none';
});

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
        l.setAttribute("placeholder", "Quantity")
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

let quantcounter = 0;
let typecounter = 0;
submit.addEventListener('click', function(event) {
    rname = nameForm.value
    rusername = usernameForm.value
    rpassword = passwordForm.value
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
    console.log(donationArr[0][0] + ' ' + donationArr[1][0] + ' ' + donationArr[2][0])
    console.log(donationArr[0][1] + ' ' + donationArr[1][1] + ' ' + donationArr[2][1])
    console.log(donationArr[0][2] + ' ' + donationArr[1][2] + ' ' + donationArr[2][2])
    console.log(donationArr[0][3] + ' ' + donationArr[1][3] + ' ' + donationArr[2][3])
    console.log(donationArr[0][4] + ' ' + donationArr[1][4] + ' ' + donationArr[2][4])
});