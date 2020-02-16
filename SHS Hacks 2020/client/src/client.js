let postText = document.getElementById('text-field');
let btn = document.getElementById('submit');
let form = document.getElementById('write-text');
const sock = io();

form.addEventListener('submit', e =>{
    e.preventDefault();
});

btn.addEventListener('click', addToList);


function addToList(e){
    console.log('click fired');
    let text = postText.value;
    if(text !== ''){
        postText.value = '';

        // let li = document.createElement('li');
        // li.classList.add('post');

        // let h1 = document.createElement('h1');
        // h1.classList.add('text');
        // h1.innerHTML = text;

        // li.append(h1);
        // document.getElementById('posts').appendChild(li);

        sock.emit('textToWrite', text);
    }

}
function addToListServer(message){
    console.log('server read');


    let li = document.createElement('li');
    li.classList.add('post');

    let h1 = document.createElement('h1');
    h1.classList.add('text');
    h1.innerHTML = message;

    li.append(h1);
    document.getElementById('postsection').appendChild(li);

}
sock.on('message', addToListServer);
