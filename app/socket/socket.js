const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('js'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  console.log('a user connected');
  // console.log(global);
  if (!global._session_) global._session_ = { user: 0 };
  // global._counter.user++;
  // console.log(global._counter.user);
  const clientsCount = socket.client.conn.server.clientsCount;
  console.log(`### Clients Count: ${clientsCount}`);

  io.emit('clientsCount', clientsCount);

  socket.on('joinRoom', id => {
    socket.join(id, () => {
      console.log(`joining ${id}`);
      io.to(id).emit('joinRoom', id);
    });
  });

  socket.on('chat message', (id, msg) => {
    console.log(`id: ${id}, msg: ${msg}`);
    io.to(id).emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
