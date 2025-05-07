/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b)
  let pairs = []
  for (let i = 0; i < nums.length; i++) {
    pairs.push(nums[i] + nums[nums.length - 1 - i])
  }
  return Math.max(...pairs)
}
console.log(minPairSum(nums = [3,5,2,3])) // 8