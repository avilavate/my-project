/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
  const [a, b, c] = [...nums]
  if (a + b > c && a + c > b && b + c > a) {
    if (a + b > c && a + c > b && b + c > a && a === b && b === c) {
      return 'equilateral'
    }
    if (
      (a === b || b === c || a === c) &&
      a + b > c &&
      a + c > b &&
      b + c > a
    ) {
      return 'isosceles'
    } else return 'scalene'
  }

  return 'none'
}

console.log(triangleType([4, 4, 4])) // Output: 'equilateral'
