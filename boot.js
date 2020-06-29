const express = require("express");
const app = express();
const http = require("http");
const socketIo = require("socket.io");
const bodyParser = require('body-parser')
const port = process.env.PORT || 4001;
app.use(bodyParser.urlencoded({ extended: false, limit:'10mb'}));
app.use(bodyParser.json({ extended: false, limit:'10mb'}));
require("./routes/maintenance.route")(app);



const server = http.createServer(app);
const io = socketIo(server);

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  console.log(socket.id);
  require("./routes/sendData.route")(app, io);


  // if (interval) {
  //   clearInterval(interval);
  // }
  // interval = setInterval(() => getApiAndEmit(socket), 1000);
  // const response = new Date();
  // // Emitting a new message. Will be consumed by the client
  // socket.emit("FromAPI", response);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  io.emit("message", response);
};

server.listen(port, () => console.log(`Listening on port ${port}`));