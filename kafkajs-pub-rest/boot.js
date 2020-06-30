const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const serverConfig = require('./configs/server.config');
const configs = require('./models/response.model');
const kafkaConsumer = require('./consumers/test.consumer')

configs.globalVariables();
app.use(bodyParser.urlencoded({ extended: false, limit:'100mb' }));
app.use(bodyParser.json({ type: 'application/json', limit:'100mb' }));
require('./routes/pub.routes')(app);


// var reqBody = {
//     groupId : "1234",
//     topic : "test",
//     isFromBegginning : true
// }
// kafkaConsumer.consumeMessage(reqBody);

app.listen(serverConfig.port, function() {
    console.log('listening in port: ' + serverConfig.port);
});
