/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let res = []
  accounts.forEach(curr => res.push(curr.reduce((acc, curr) => acc + curr, 0)))
  return Math.max(...res)
}
console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
    [4, 5, 6],
    [7, 8, 9],
    [10, 10, 10]
  ])
) // expect 30
