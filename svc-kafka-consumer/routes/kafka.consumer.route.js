

module.exports = (app) => {

    app.route('/health').post((req, res) => {
        var body = req.body;
        
        res.send({
            "success": "up" 
        });
    });

}