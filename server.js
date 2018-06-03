var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);


server.listen(process.env.PORT || 3000);
console.log('server running');

app.use(express.static("public"));

io.sockets.on('connection', function(socket) {
    console.log( 'socket connected' );

    socket.on('send message', function(data) {
        io.sockets.emit('new message', {msg: data});
    });
});