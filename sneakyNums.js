/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  return nums.filter((num, i) => {
    return nums.indexOf(num) !== i
  })
}
console.log(getSneakyNumbers([0, 1, 1, 0])) // [1, 2, 3, 4, 5]
