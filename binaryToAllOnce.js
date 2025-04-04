/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let counter = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums.join('') === Array(nums.length).fill(1).join('')) break
    if (nums[i] === 0) {
      let reminder = nums.slice(i).map(ele => (ele == 0 ? 1 : 0))
      nums = [...nums.slice(0, i), ...reminder]
      counter++
    }
  }
  return counter
}

console.log(minOperations([1,0,0,0]))
