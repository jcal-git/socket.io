var kafkaConsService = require('../services/cons.service');

exports.consumeMessage = (requestBody) => {

    console.log('Subscribing to kafka topic');
    var msg = {
        groupId : requestBody.groupId,
        topic : requestBody.topic,
        isFromBegginning : requestBody.isFromBegginning
    }
    kafkaConsService.consumeMessage(msg);

}