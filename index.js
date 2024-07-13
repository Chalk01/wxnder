const express = require("express");
const { createServer } = require("node:http");
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

// upload files
app.use('/', express.static(__dirname + '/app'));

// multiplayer handler (dont change anything)
io.on('connection', (socket) => {
    console.log('bro join');
    
    socket.on('disconnect', () => {
        console.log('bro leave');
    });    
});

function emitPacket(packet) {
    //
}

server.listen(1000, () => {
    console.log('code is load');
    console.log('http://localhost:1000');
});