const { parentPort, workerData, threadId } = require('worker_threads')

console.log(`Worker started: Thread ID = ${threadId}`)

function processNode (key, data) {
  console.log({ key, result: data.value * 10 })
}

const result = processNode(workerData.key, workerData.data)
parentPort.postMessage(result)
