// app.js
const express = require('express');
const { initPublisher, publishToQueue } = require('./rabbitmq/publisher');
const { initDB } = require('./db');

const app = express();
app.use(express.json());

initDB();
initPublisher().then(() => {
  app.post('/update-user', async (req, res) => {
    const { userId, newData } = req.body;
    if (!userId || !newData) {
      return res.status(400).send({ error: 'userId and newData required' });
    }

    await publishToQueue({ userId, newData });
    res.status(202).send({ message: 'Queued for update' });
  });

  app.listen(3000, () => console.log('API server running on port 3000'));
});
