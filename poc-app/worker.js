// rabbitmq/worker.js
const amqplib = require('amqplib');
const { updateUser } = require('../db');

async function startWorker() {
  const conn = await amqplib.connect('amqp://localhost');
  const channel = await conn.createChannel();
  await channel.assertQueue('user_write_queue');

  channel.consume('user_write_queue', async (msg) => {
    if (msg !== null) {
      const { userId, newData } = JSON.parse(msg.content.toString());
      console.log(`[Worker] Updating user ${userId}`);

      try {
        const changes = await updateUser(userId, newData);
        if (changes) {
          console.log(`[Worker] Updated user ${userId}`);
        } else {
          console.log(`[Worker] User ${userId} not found`);
        }
        channel.ack(msg);
      } catch (err) {
        console.error('[Worker] DB error:', err);
        channel.nack(msg, false, false); // Optionally requeue: `true`
      }
    }
  });

  console.log('[Worker] Waiting for messages...');
}

startWorker();
