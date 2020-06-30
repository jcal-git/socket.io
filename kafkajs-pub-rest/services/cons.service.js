const { Kafka } = require('kafkajs');
const serverConfig = require('../configs/server.config');
const kafka = new Kafka(serverConfig.kafkaBroker);


exports.consumeMessage =  (msg) => {

    const consumer = kafka.consumer({ groupId: msg.groupId })
    consumer.connect()
    consumer.subscribe({ topic: msg.topic, fromBeginning: true })
    consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          value: message.value.toString(),
        })
      },
    });
    console.log('Subscribed to Kafka topic');

}