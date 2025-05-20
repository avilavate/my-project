// init-db.js
const { db, initDB } = require('./db');

initDB();
db.run(`INSERT OR IGNORE INTO users (id, data) VALUES (?, ?)`, ['user1', 'initial data']);
db.close();
