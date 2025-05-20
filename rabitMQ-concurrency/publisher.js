// rabbitmq/publisher.js
const amqplib = require('amqplib');

let channel;

async function initPublisher() {
  const connection = await amqplib.connect('amqp://localhost');
  channel = await connection.createChannel();
  await channel.assertQueue('user_write_queue');
}

async function publishToQueue(data) {
  if (!channel) throw new Error('Channel not initialized');
  channel.sendToQueue('user_write_queue', Buffer.from(JSON.stringify(data)), {
    persistent: true,
  });
}

module.exports = { initPublisher, publishToQueue };
