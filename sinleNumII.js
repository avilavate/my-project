/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return (
    ([...new Set(nums)].reduce((acc, curr) => acc + curr, 0) * 3 -
      nums.reduce((acc, curr) => acc + curr, 0)) /
    2
  )
}
console.log(singleNumber([2, 2, 3, 2]))
