const { parentPort, workerData, threadId } = require('worker_threads');

function removeCircularWithMeta(obj, seen = new WeakMap(), path = '') {
  if (obj !== null && typeof obj === 'object') {
    if (seen.has(obj)) return `[Circular → ${seen.get(obj)}]`;
    seen.set(obj, path);
    const result = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      result[key] = removeCircularWithMeta(obj[key], seen, `${path}/${key}`);
    }
    return result;
  }
  return obj;
}

console.log(`Worker ${threadId} processing: ${workerData.key}`);
const cleaned = removeCircularWithMeta(workerData.data);
parentPort.postMessage({ key: workerData.key, cleaned });
