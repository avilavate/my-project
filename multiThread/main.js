const { Worker } = require('worker_threads');

const bigJson = {};
for (let i = 1; i <= 1650; i++) {
  bigJson[`node${i}`] = { value: i };
}

function runWorker(key, data) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', {
      workerData: { key, data }
    });

    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

async function main() {
  console.time('Processing Time');

  const promises = Object.entries(bigJson).map(([key, data]) =>
    runWorker(key, data)
  );

  try {
    const results = await Promise.all(promises);
    console.timeEnd('Processing Time');
    console.log(`Processed ${results.length} nodes`);
  } catch (err) {
    console.error('Error:', err);
  }
}

main();
