var http = require('http'),
    index = `<html>
    <head>
        <script src='/socket.io/socket.io.js'></script>
        <script>
            var socket = io();
            socket.on('Hi', function(data) {
                addMessage(data.message);
                socket.emit('New client', {data: 'foo!', id: data.id});
            });
            socket.on('time', function(data) {
                addMessage(data.time);
            });
            socket.on('error', console.error.bind(console));
            socket.on('message', console.log.bind(console));

            function addMessage(message) {
                var text = document.createTextNode(message),
                    el = document.createElement('li'),
                    messages = document.getElementById('messages');

                el.appendChild(text);
                messages.appendChild(el);
            }
        </script>
    </head>
    <body>
        <ul id='messages'></ul>
    </body>
    </html>`;

var app = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(index);
});

var io = require('socket.io').listen(app);

function emitTime() {
    io.emit('time', { time: new Date().toJSON() });
}
setInterval(emitTime, 1000);

io.on('connection', function (socket) {
    socket.emit('Hi', { message: 'Hi!', id: socket.id });
    socket.on('New client', console.log);
});

app.listen(3000);