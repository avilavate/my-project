/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  let sum1 = 0
  let sum2 = 0
  let max = Math.max(n, m)
  let min = Math.min(n, m)

  for (let i = 1; i < 10; i++) {
   if(i%n!==0) sum+=1
   if(i%m!==0) sum+=1
  }
  return Math.abs(sum1 - sum2)
}
