const express = require("express");
const app = express();
const http = require("http");
const socketIo = require("socket.io");
const bodyParser = require('body-parser')
const port = process.env.PORT || 4001;
app.use(bodyParser.urlencoded({ extended: false, limit:'10mb'}));
app.use(bodyParser.json({ extended: false, limit:'10mb'}));

const server = http.createServer(app);
const io = socketIo(server);

require("./routes/maintenance.route")(app);
require("./routes/sendData.route")(app, io);


io.on("connection", (socket) => {
  console.log("New client connected");
  console.log(socket.id);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));