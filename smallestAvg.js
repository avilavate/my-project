/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
  let minAvg= Infinity
  while (nums.length > 0) {
    const max = Math.max(...nums)
    const min = Math.min(...nums)
    const avg = (max + min) / 2
    
    nums.splice(nums.indexOf(max), 1)
    nums.splice(nums.indexOf(min), 1)
    if (avg < minAvg) {
      minAvg = avg
    }
  }
  return minAvg
}
const nums = [7,8,3,4,15,13,4,1]

console.log(minimumAverage(nums)) // Output: 5.2