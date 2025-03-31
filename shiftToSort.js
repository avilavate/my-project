/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function (nums) {
  if ([...nums].sort().join('') === nums.join('')) return 0
  let counter = nums.length - 1
  let n = 0
  let copy = [...nums]
  while (counter) {
    nums.unshift(nums.splice(nums.length - 1, 1)[0])
    counter--
    n++
    if (copy.join('') == nums.join('')) {
      return -1
    } else if ([...nums].sort((a,b)=>a-b).join('') === nums.join('')) {
      return n;
    }

  }
  return -1
}

console.log(minimumRightShifts([27,33,42,58,81,8,9,17]))
