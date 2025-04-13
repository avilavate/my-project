/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
  let i = 1
  let res = Math.abs(nums[0] - nums[1])

  while (i <= nums.length) {
    let curr = Math.abs(nums[i] - nums[i + 1])
    if (curr > res) {
      res = curr
    }
    i++
  }
  let last = Math.abs(nums[nums.length - 1] - nums[0])
  if (res < last) res = last
  return res
}

console.log(maxAdjacentDistance([-5, -10, -5]))
