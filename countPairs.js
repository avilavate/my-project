/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i >= j) continue
      if (i < j && nums[i] === nums[j] && (i * j) % k === 0) {
        res++
      }
    }
  }
  return res
}

let nums = [3, 1, 2, 2, 2, 1, 3],
  k = 2
console.log(countPairs(nums, k))

