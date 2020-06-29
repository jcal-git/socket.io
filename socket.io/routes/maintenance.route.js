module.exports = (app) => {

    app.route("/api/maintenance").get((req, res) => {
        res.send({ response: "I am alive" }).status(200);
    });

}


