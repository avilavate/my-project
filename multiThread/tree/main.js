// main.js
const { Worker } = require('worker_threads');
const path = require('path');

const A = { name: 'A' };
const B = { name: 'B' };
const C = { name: 'C' };
const D = { name: 'D' };

A.next = B;
B.next = C;
C.next = B;
D.next = null;  // Circular reference here

 // if you want to import in another file

const data = {
  key: 'root',
  data: A
};

const worker = new Worker(path.resolve(__dirname, 'tree-worker.js'), {
  workerData: data
});

worker.on('message', (msg) => {
  console.log('\n🧾 Tree Output:\n', JSON.stringify(msg.tree, null, 2));
});

worker.on('error', (err) => {
  console.error('Worker error:', err);
});

worker.on('exit', (code) => {
  if (code !== 0) console.error(`Worker stopped with exit code ${code}`);
});
