const  {Server} = require('socket.io');

const server = new Server({cors: {origin: 'http://localhost:4200'}});

server.on('connection', (socket) => {
    console.log('connected');
    socket.on('notification', (data) => {
        console.log(data);
        socket.broadcast.emit('recieved',{data: data, Notification: "this is a test notification."});
    })
    socket.on('message', (data) => {
        console.log(data);
        socket.broadcast.emit('recieved',{data: data, message: "this is a test notification."});
    })
})

server.listen(8888);