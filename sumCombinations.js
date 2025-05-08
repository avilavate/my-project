/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = []
  for (let i = 0; i < candidates.length; i++) {
    if (target % candidates[i] === 0) {
      res.push(
        Array.from({ length: target / candidates[i] }).fill(candidates[i])
      )
    }
  }
  return res
}
console.log(combinationSum([2, 3, 6, 7], 8)) // [[2,2,3],[7]]
