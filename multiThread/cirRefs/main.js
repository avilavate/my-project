const { Worker } = require('worker_threads');

function createLargeCircularJson(count = 650) {
  const nodes = {};

  // Create base nodes
  for (let i = 0; i < count; i++) {
    nodes[`node${i}`] = { id: i, name: `Node ${i}` };
  }

  // Add internal circular refs: nodeX.self → nodeX
  for (let i = 0; i < count; i++) {
    nodes[`node${i}`].self = nodes[`node${i}`];
  }

  // Add external circular refs: nodeX.link → nodeX+1
  for (let i = 0; i < count - 1; i++) {
    nodes[`node${i}`].link = nodes[`node${i + 1}`];
  }

  // Last node points back to first (full cycle)
  nodes[`node${count - 1}`].link = nodes[`node0`];

  return nodes;
}

function runWorker(key, data) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', {
      workerData: { key, data }
    });

    worker.on('message', (msg) => resolve(msg));
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) reject(new Error(`Worker ${key} exited with code ${code}`));
    });
  });
}

async function main() {
  const bigJson = createLargeCircularJson();

  const entries = Object.entries(bigJson);
  const tasks = entries.map(([key, data]) => runWorker(key, data));

  console.time('Total Processing Time');
  const results = await Promise.all(tasks);
  console.timeEnd('Total Processing Time');

  // Display a sample of the result
  console.log('Sample cleaned result:', results.slice(0, 3));
}

main();
