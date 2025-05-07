/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let pair = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        pair++
      }
    }
  }
  return pair / 2 // Each pair is counted twice, so divide by 2
}
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])) // 4