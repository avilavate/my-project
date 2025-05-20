/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) {
        res++ // Found a pair that sums to target
      }
    }
  }
  return res // Return the total count of pairs found
}
const nums = [-6, 2, 5, -2, -7, -1, 3],
  target = -2
  console.log(countPairs(nums, target)) // Output: 10
