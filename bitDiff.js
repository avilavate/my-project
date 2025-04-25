/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  if (x === y) return 0
  x = x.toString(2)
  y = y.toString(2)
  
  let res=(x^y)
  return String(res).split('').reduce((acc, cur) => {
    if (cur === '1') acc++
    return acc
  }, 0)
  
}
console.log(hammingDistance(1, 4)) // 2
