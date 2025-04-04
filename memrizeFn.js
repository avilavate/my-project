function memoize (fn) {
  let hash = new Map();
  return function (...args) {
    let input = JSON.stringify(args)
    if (hash.has(input)) return hash.get(input);
    else {
      let out = fn(...args)
      hash.set(input,out);
      return out
    }
  }
}

getInputs = () => [[2,2],[2,2],[1,2]]
fn = function (a, b) { return a + b; }

console.log(memoize(fn()))