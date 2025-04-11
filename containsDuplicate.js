/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let distict = [...new Set(nums)]
  let res = false
  for (let i = 0; i < distict.length; i++) {
    let i1 = -1
    // let i2=0;
    nums.map((num, index) => {
      if (distict[i] === num) {
        if (i1 !== -1) {
          if (index - i1 <= k) {
            res = true
            return res
          }
        }
        i1 = index
      }
    })
  }
  return res
}

let nums = [1, 2, 3, 1]
let k = 3
console.log(containsNearbyDuplicate(nums, k)) // true
