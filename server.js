const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = 3001;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    const user = Date.now();

    socket.on('message.sent', function (message) {
        io.emit('message', user + ': ' + message)
    });
    io.emit('message', `User ${user} connected.`);
});

http.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
});
