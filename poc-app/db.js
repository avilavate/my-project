// db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('users.db');

function updateUser(userId, data) {
  return new Promise((resolve, reject) => {
    db.run(
      'UPDATE users SET data = ? WHERE id = ?',
      [data, userId],
      function (err) {
        if (err) return reject(err);
        resolve(this.changes);
      }
    );
  });
}

function initDB() {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    data TEXT
  )`);
}

module.exports = { db, updateUser, initDB };
