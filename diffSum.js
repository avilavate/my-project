/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
    let nums= Array.from({ length: n }, (_, i) => i + 1)

    let even= nums.filter(num => num % m === 0).reduce((a, b) => a + b, 0)
    let odd= nums.filter(num => num % m !== 0).reduce((a, b) => a + b, 0)
   return Math.abs(even-odd)    
  }
  console.log(differenceOfSums(10, 3)) // Output: 6