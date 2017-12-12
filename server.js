import express from "express";
import open from "open";

const app = express();
const port = 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/pub/index.html');
});




// var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);



io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
    });
});

io.emit('some event', { for: 'everyone' });
io.on('connection', function (socket) {
    socket.broadcast.emit('hi');
});

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});
// io.on('connection', function(socket){
//     console.log('a user connected');
//     socket.on('disconnect', function(){
//       console.log('user disconnected');
//     });
//   });


http.listen(3000, function () {
    console.log('listening on *:3000');
});


// app.listen(port, function (err) {
//     console.log(`Example app listening on port ${port}`);
//     if (err) {
//         console.log(err);
//     } else {
//         open("http://localhost:" + port);
//     }
// });


// app.listen(port, function (err) {
//     console.log(`Example app listening on port ${port}`);
//     if (err) {
//         console.log(err);
//     } else {
//         open("http://localhost:" + port);
//     }
// });
