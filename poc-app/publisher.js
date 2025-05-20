// rabbitmq/publisher.js
const amqplib = require('amqplib');

let channel;

async function initPublisher() {
  const conn = await amqplib.connect('amqp://localhost');
  channel = await conn.createChannel();
  await channel.assertQueue('user_write_queue');
}

function publishToQueue(data) {
  if (!channel) throw new Error('RabbitMQ not initialized');
  channel.sendToQueue('user_write_queue', Buffer.from(JSON.stringify(data)), {
    persistent: true,
  });
}

module.exports = { initPublisher, publishToQueue };
