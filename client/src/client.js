let postText = document.getElementById('text-field');
let btn = document.getElementById('submit');
let form = document.getElementById('write-text');
localStorage.getItem
let arr = []
let tags = document.querySelectorAll(".tags");
tagsArray = Array.from(tags);
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
        let submitTags = tagHolder.map(tag => {
            return tag.innerHTML;
        });
        let textAreaValue = document.getElementById('text-area').value;
        console.log(textAreaValue);
        console.log(typeof(submitTags[0]));
        console.log(`Submit tags before server ${submitTags}`);
        let user = sessionStorage.getItem("currentUser");
        document.getElementById('text-area').value = '';
        tagHolder.forEach(tag => {
            tag.style.backgroundColor = '#e6e6e6';
        })
        tagHolder = [];
        sock.emit('textToWrite', text, user, submitTags, textAreaValue);
    }

}



function addToListServer(message, user, tagHolder, textValueArea) {
    console.log(textValueArea);
    console.log(`After server tags: ${tagHolder}`);
    console.log(user);
    let image = document.createElement('img');
    let textBody = document.createElement('p');
    textBody.innerHTML = textValueArea;
    textBody.classList.add('text-area');
    image.src = "../images/profilePicture.png";
    image.classList.add("resize");
    let span = document.createElement('span');
    let li = document.createElement('li');
    li.classList.add('post');
    span.innerHTML = user;
    span.classList.add("MOVE");
    let h1 = document.createElement('h1');
    h1.classList.add('text');
    h1.innerHTML = message;
    li.appendChild(image);
    li.appendChild(span);
    li.append(h1);
    li.append(textBody);
    let spacer = document.createElement('div');
    spacer.classList.add('spacer');
    li.append(spacer);
    tagHolder.forEach(tag => {
        let holder = document.createElement('span');
        holder.classList.add('tags');
        holder.innerHTML = tag;
        li.append(holder);
    })
    document.getElementById('postsection').appendChild(li);
    console.log(li);
    tagHolder = [];

}
let tagHolder = [];
tagsArray.forEach(tag => {

    tag.addEventListener("click", e => {
        tagHolder.push(tag);
        console.log(tag);
        console.log(tagHolder);
        tag.style.backgroundColor = '#cccccc';
    });

});
sock.on('message', addToListServer);