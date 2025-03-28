/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let res = []
  let lastIndex = -1
  for (let index = 0; index < triangle.length; index++) {
    if (index <= 1) {
      let min = Math.min(...triangle[index])
      res.push(min)
      lastIndex = triangle[index].indexOf(min)
    } else {
      let minIndex = lastIndex - 1 > 0 ? lastIndex - 1 : 0
      let maxIndex =
        lastIndex + 1 < triangle[index].length
          ? lastIndex + 1
          : triangle[index].length

      let min = Math.min(
        ...triangle[index].filter((ele, i) => i >= minIndex && i <= maxIndex)
      )
      res.push(min)
    }
  }

  return res.reduce((acc, ele) => (acc += ele), 0)
}

let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
console.log(minimumTotal(triangle))
