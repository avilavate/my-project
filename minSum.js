/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
  return nums
    .map(num => {
      return String(num)
        .split('')
        .reduce((acc, val) => {
          acc += Number(val)
          return acc
        }, 0)
    })
    .sort((a, b) => a - b)[0]
}
console.log(minElement([999, 19, 199])) // 1
