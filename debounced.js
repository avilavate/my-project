/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let timedFn = null
  return function (...args) {
    clearTimeout(timedFn);
     timedFn = setTimeout(() => {
      fn(...args)
      running = false
    }, t)
  }
}

const log = debounce(console.log, 100)
log('Hello1') // cancelled
log('Hello2') // cancelled
log('Hello3') // Logged at t=100ms
