var socket = require('socket.io-client')('http://localhost:4001');
// var socket = require('socket.io-client')('http://128.199.74.127:4001');

var clientId;
socket.on('connect', function(){

    var clientId = socket.id;
    console.log(socket.id);
    
    socket.on("notif", function(data){
        console.log("notify : " + JSON.stringify(data));
    });

    socket.on("reply", function(data){
        console.log("reply : " + JSON.stringify(data));
    });
   
});

socket.on('disconnect', function(){});