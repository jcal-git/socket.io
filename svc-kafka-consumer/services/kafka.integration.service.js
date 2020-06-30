const axios = require('axios');

exports.consumeByGroup = async () => {
    try {

        var { Kafka, CompressionTypes, CompressionCodecs  } = require('kafkajs')
        const SnappyCodec = require('kafkajs-snappy')
        CompressionCodecs[CompressionTypes.Snappy] = SnappyCodec

        var envbrokers= ((typeof process.env.KAFKA_HOST) != 'undefined') ? process.env.KAFKA_HOST : "128.199.74.127:9094"
        var envbrokersArr = envbrokers.split(',');
        var brokers = envbrokersArr;

        const kafka = new Kafka({
            clientId: process.env.KAFKA_CONSUMER_ID || "ResponseConsumerId",
            brokers: brokers,//['kafka1:9092', 'kafka2:9092']
            ssl: false,
            connectionTimeout: 30000,
            requestTimeout: 180000,
            sessionTimeout: 180000
        })
        const consumer = kafka.consumer({
            groupId: process.env.KAFKA_GROUP_ID || "ResponseConsumerGroup",
            sessionTimeout: process.env.KAFKA_CONSUMER_SESSION_TIMEOUT || 180000
        });

        await consumer.connect();
        var envTopic = ((typeof process.env.KAFKA_TOPIC) != 'undefined') ? process.env.KAFKA_TOPIC : "ResponseTopic"
        var envTopicArr = envTopic.split(',');
        var kafkaTopic = envTopicArr

        for(val of kafkaTopic) {
            await consumer.subscribe({ topic: val, fromBeginning: false });

        }

        await consumer.run({
            autoCommit: true,
            eachMessage: async ({ topic, partition, message }) => {
                consoleLog("---------Consuming in " + topic + " ----------"); 

                console.log("message", message.value.toString());
                try {
                    let body = JSON.stringify(JSON.parse(message.value.toString()));
                    console.log("body", body);
                    var config = {
                        method: 'post',
                        url: process.env.PLUK_SOCKETIO_SENDDATA_URL || 'http://128.199.74.127:4001/api/sendData',
                        headers: { 
                            'Content-Type': 'application/json'
                        },
                        data : body
                    };
                      
                    axios(config)
                    .then(function (response) {
                        console.log(JSON.stringify(response.data));
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                }
                catch (ex){
                    console.log(error.response);
                }
               
            }
        });
    }
    catch(e) {
        consoleLogError(e);
    }

}

