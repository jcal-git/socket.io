const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const serverConfig = require('./configs/server.config.js');
const configs = require('./configs/kafka.consumer');
configs.globalVariables();

app.use(bodyParser.urlencoded({ extended: false, limit:'100mb' }));
app.use(bodyParser.json({ type: 'application/json', limit:'100mb' }));
require('./routes/kafka.consumer.route')(app);

app.listen(serverConfig.port, async function() {
    await require('./services/kafka.integration.service').consumeByGroup();
    consoleLog('listening in port: ' + serverConfig.port);
});