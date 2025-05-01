/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function (pattern) {
  let array = new Array(pattern.length).fill(0).map((_, index) => index + 1)
  let res = []
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === 'I') {
      res.push(array.shift())
    }
    if(pattern[i] === 'D') {
      res.push(array.pop())
    }
  }
  return res.join('')
}
