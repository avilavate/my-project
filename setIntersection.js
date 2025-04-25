/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  num1 = new Set(nums1)
  num2 = new Set(nums2)
  let result = []
  for (const value of num1) {
    if (num2.has(value)) {
      result.push(value)
    }
  }
  return result
}
console.log(intersection([1, 2, 2, 1], [2, 2])) // [2]
