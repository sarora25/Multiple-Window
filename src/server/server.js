  var fs = require('fs'),
      path = require('path'),
      sio = require('socket.io'),
      static = require('node-static');

  var app = require('http').createServer(handler);
  app.listen(9090);

  var file = new static.Server(path.join(__dirname, '..', 'public'));

  function handler(req, res) {
    file.serve(req, res);
  }
  var io = sio.listen(app);

  io.sockets.on('connection', function (socket) {
    socket.on('user image', function (msg) {
      console.log(msg);
      socket.broadcast.emit('user image', msg);
    });

     socket.on('drag_alt', function (msg) {
      console.log(msg);
      socket.broadcast.emit('drag_alt', msg);
    });

     socket.on('drag_main', function (msg) {
      console.log(msg);
      socket.broadcast.emit('drag_main', msg);
    });

     socket.on('drop1', function (msg) {
      console.log(msg);
      socket.broadcast.emit('drop1', msg);
    });

     socket.on('drop2', function (msg) {
      console.log(msg);
      socket.broadcast.emit('drop2', msg);
    });
  });