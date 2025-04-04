/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function* (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      yield* compactObject(arr[i])
    } else {
      yield arr[i]
    }
  }
}

let arr = [[[6]], [1, 3], []]
const generator = compactObject(arr)
console.log(generator.next().value )// 6
generator.next().value // 1
generator.next().value // 3
console.log(generator.next().done) // true
