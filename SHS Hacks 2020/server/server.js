/*
npm init -y
npm install express socket.io
npm install nodemon --save-dev


MAKE SURE you go to package.json and in the first object under
scripts, make sure it has a start key value pair

in package.json add an additional script "dev": "nodemon server js"
to auto restart server
*/


//importing required packages
const http = require('http');
const express = require('express');
const socketio = require('socket.io'); //its a function



//defining an express object (also a function)
const app = express();

const clientPath = `${__dirname}/../client`;
console.log(`Serving static from ${clientPath}`);

//initializing connection with server
app.use(express.static(clientPath));
const server = http.createServer(app);

//doesn't interfere with express
const io = socketio(server);



io.on('connection', (socket) => {
    //   socket.emit('message', "You are connected");

    socket.on('textToWrite', (text, user, submitTags, textAreaValue) => {
        if (text !== '') {
            console.log('text ran');
            console.log(submitTags);
            io.emit('message', text, user, submitTags, textAreaValue);
        }
    });

});

server.on('error', (err) => {
    console.error('Server error:', err);
});

server.listen(8080, () => {
    console.log('RPS started on 8080');
});