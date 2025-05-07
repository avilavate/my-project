/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let X = nums.slice(0, n)
  let Y = nums.slice(n, 2 * n)
  let res = []
  for (let i = 0; i < n; i++) {
    res.push(X[i])
    res.push(Y[i])
  }
  return res
}
