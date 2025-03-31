/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumOfGoodNumbers = function (nums, k) {
  let res = []
  nums.forEach((ele, index) => {
    if (index - k >= 0 && index + k < nums.length) {
      if (
        nums[index] > nums[nums[index - k]] &&
        nums[index] > nums[index + k]
      ) {
        res.push(nums[index])
      }
    } else if (index + k < nums.length) {
      if (nums[index] > nums[index + k]) {
        res.push(nums[index])
      }
    } else if (index - k >= 0) {
      if (nums[index] > nums[index - k]) {
        res.push(nums[index])
      }
    } else {
      res.push(nums[index])
    }
  })
  return res.reduce((acc, ele)=>acc+ele,0);
}
//console.log(sumOfGoodNumbers([2, 1], 1))
