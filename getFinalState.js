/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
  const getMin = nums => {
    let min = Math.min(...nums)
    return nums.indexOf(min)
  }

  while (k) {
    let indMin = getMin(nums)
    nums[indMin] = nums[indMin] * multiplier
    k--
  }
  return nums
}

let nums = [2, 1, 3, 5, 6],
  k = 5,
  multiplier = 2

console.log(getFinalState(nums, k, multiplier))
