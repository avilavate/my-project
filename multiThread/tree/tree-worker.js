// tree-worker.js
const { parentPort, workerData, threadId } = require('worker_threads');

function buildTree(obj, seen = new WeakMap(), path = '') {
  if (obj !== null && typeof obj === 'object') {
    if (seen.has(obj)) {
      return {
        name: path.split('/').pop() || 'root',
        value: `[Circular → ${seen.get(obj)}]`
      };
    }

    seen.set(obj, path || '/');
    const children = [];

    for (const key of Object.keys(obj)) {
      const childPath = path ? `${path}/${key}` : `/${key}`;
      children.push(buildTreeEntry(key, obj[key], seen, childPath));
    }

    return {
      name: path.split('/').pop() || workerData.key,
      children
    };
  } else {
    return {
      name: path.split('/').pop() || 'value',
      value: obj
    };
  }
}

function buildTreeEntry(key, value, seen, path) {
  if (value !== null && typeof value === 'object') {
    return buildTree(value, seen, path);
  } else {
    return {
      name: key,
      value
    };
  }
}

console.log(`👷 Worker ${threadId} processing: ${workerData.key}`);
const tree = buildTree(workerData.data);
parentPort.postMessage({ key: workerData.key, tree });
