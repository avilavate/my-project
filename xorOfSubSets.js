/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let subsets = [[]]
  let res = 0
  for (ele of nums) {
    let subset = subsets.map(subset => [...subset, ele])
    res += subset.reduce((acc, val) => {
      acc ^= val
      return acc
    }, 0)
  }
  return res;
}
// let xor = 0
/*let res = 0

  for (let i = 0; i < subsets.length; i++) {
    subsets[i].forEach(ele => {
        xor^= ele;
    });
    res += xor;
    xor = 0
  }
  return res
}
*/
console.log(subsetXORSum([1, 3])) // 6
