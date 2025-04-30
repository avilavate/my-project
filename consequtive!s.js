/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let res = []
  let counter = 0
  for (let i = 0; i < nums.length; i++) {
    if(i===nums.length-1 && nums[i]===1){
      counter++
      res.push(counter)
      break
    }
    if (nums[i] === 1) {
      counter++
    } else {
      res.push(counter)
      counter = 0
    }
  }
  return Math.max(...res)
}
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])) // 4
