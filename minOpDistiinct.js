/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let isUnique = new Set(nums).size === nums.length
  let counter = 0
  if (!isUnique) {
    for (let i = 0; i < nums.length && !isUnique; i++) {
      if (nums.length === 0) break
      if (nums.length === 1) break
      nums.splice(0, nums.length < 3 ? nums.length : 3)
      counter++
      isUnique = new Set(nums).size === nums.length
      if (isUnique) return counter
      i = 0
    }
  }
  return counter
}

console.log(minimumOperations([3, 7, 12, 12, 3, 14, 1, 1]))
