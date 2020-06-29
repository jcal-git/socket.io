
module.exports = (app, io) => {

    app.route("/api/sendData").post((req, res) => {

        io.emit(req.body.id, req.body.message );
        res.send({ sendTo: req.body.id, message : req.body.message });

    });
      
}


