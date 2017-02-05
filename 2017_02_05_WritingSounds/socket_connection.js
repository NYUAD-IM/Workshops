var socket = io.connect('http://104.236.239.60:8080');

socket.on('connect', function(){
  console.log('connected to the server');
});

socket.on('start', function(){
  startPattern();
});
