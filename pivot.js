/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  let pivots = nums.filter(num => num === pivot)
  let l1 = nums.filter(num => num < pivot)
  let l2 = nums.filter(num => num > pivot)
  return [...l1, pivots, ...l2]
}
