/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  let result = [...new Set(nums)].reduce((acc, curr) => {
    if (curr > k) {
      acc++
    }
    return acc
  }, 0)

  return result > 0 ? result : -1
}

console.log(minOperations([1], 1)) // 2
