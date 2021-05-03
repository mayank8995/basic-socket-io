const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
    // res.send('<h1>Hello World</h1>');
    // console.log(__dirname)
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
    console.log('a user connected', socket);
    // socket.on('chat message', () => {
    //     io.emit('chat message', 'a user connected.')
    // });
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });

    // socket.on('disconnect', () => {
    //     console.log('user disconnected');
    // })

});
server.listen(3000, () => {
    console.log('listening at 3000');
})