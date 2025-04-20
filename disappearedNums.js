/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let res = new Set(
    Array.from({ length: nums.length }, (_, i) => 1 + i)
  ).difference(new Set(nums))

  return [...res]
}
console.log(findDisappearedNumbers((nums = [4, 3, 2, 7, 8, 2, 3, 1])))
