// var socket = require('socket.io-client')('http://128.199.74.127:4001');
var socket = require('socket.io-client')('http://128.199.74.127:4001');

var clientId;
socket.on('connect', function(){

    var clientId = socket.id;
    console.log(clientId);
    
    socket.on(clientId, function(data){
        console.log(data);
    });

});


socket.on('disconnect', function(){});