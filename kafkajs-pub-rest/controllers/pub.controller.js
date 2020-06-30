var kafkaService = require('../services/pub.service');

exports.publishMessage = (requestBody) => {

    return new Promise((resolve,reject) => {

        try{

            console.log(requestBody)
            successModel.data= requestBody;
            kafkaService.sendMessageToKafkaTopic(requestBody).then(res => {
                resolve(res);
            });
            resolve(true);

        }
        catch (e){
            
            reject(e);

        }
    })

}
