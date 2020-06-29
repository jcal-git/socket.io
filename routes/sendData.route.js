const { request } = require("express");

module.exports = (app, io) => {

    app.route("/api/sendData").post((req, res) => {

        console.log(req.body.message);
        io.to(req.body.id).emit(req.body.channel, req.body.message );
        res.send({ sendTo: req.body.id, message : req.body.message });

    });
      
}


