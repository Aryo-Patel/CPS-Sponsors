let postText = document.getElementById('text-field');
let btn = document.getElementById('submit');
let form = document.getElementById('write-text');
localStorage.getItem
let arr = []
const sock = io();

form.addEventListener('submit', e => {
    e.preventDefault();
});

btn.addEventListener('click', addToList);


function addToList(e) {
    console.log('click fired');
    let text = postText.value;
    arr.push(text);
    localStorage.setItem("Messages", JSON.stringify(arr));
    if (text !== '') {
        postText.value = '';

        // let li = document.createElement('li');
        // li.classList.add('post');

        // let h1 = document.createElement('h1');
        // h1.classList.add('text');
        // h1.innerHTML = text;

        // li.append(h1);
        // document.getElementById('posts').appendChild(li);
        let user = localStorage.getItem("currentUser");
        sock.emit('textToWrite', text, user);
    }

}

function addToListServer(message, user) {
    console.log(user);
    let image = document.createElement('img');
    image.src = "../images/profilePicture.png";
    let span = document.createElement('span');
    let li = document.createElement('li');
    li.classList.add('post');
    span.innerHTML = user;
    let h1 = document.createElement('h1');
    h1.classList.add('text');
    h1.innerHTML = message;
    li.appendChild(image);
    li.appendChild(span);
    li.append(h1);
    document.getElementById('postsection').appendChild(li);

}
sock.on('message', addToListServer);