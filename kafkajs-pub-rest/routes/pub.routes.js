var controller = require('../controllers/pub.controller');

module.exports = (app) => {

    app.route('/produce').post((req, res) => {
        
        var body = req.body;
        controller.publishMessage(body).then(ret => {

            res.send(returnModel(ret));

        })
        
    });

    function returnModel(ret) {
        if(ret) return successModel;
        return failModel;
    }

    app.route('/api/health').get((req, res) => {
        
        var ret = {
            "request" : "OK",
            "status" : "up"
        }
        res.send(ret);
        
    });

}