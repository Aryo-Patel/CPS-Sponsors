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

let name = ''
let username = ''
let password = ''
    //overalldropdown
interestsWrap.addEventListener('mouseover', function(event) {
    dropContent.style.display = 'block';
})
interestsWrap.addEventListener('mouseout', function(event) {
    dropContent.style.display = 'none';
})
Array.from(interestSelect).forEach(addEventListener('click', function(event) {

        }) stemdrop.addEventListener('mouseover', function(event) {
            stemwrap.style.display = 'block';
        }) stemdrop.addEventListener('mouseout', function(event) {
            stemwrap.style.display = 'none';
        })

        sportsdrop.addEventListener('mouseover', function(event) {
            sportsdrop.style.display = 'block';
        }) sportswrap.addEventListener('mouseout', function(event) {
            sportswrap.style.display = 'none';
        })

        academicdrop.addEventListener('mouseover', function(event) {
            academicwrap.style.display = 'block';
        }) academicdrop.addEventListener('mouseout', function(event) {
            academicwrap.style.display = 'none';
        })

        submit.addEventListener('click', function(event) {
            name = nameForm.value
            username = usernameForm.value
            password = passwordForm.value

        })