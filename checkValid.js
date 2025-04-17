/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  let n = matrix.length

  for (let i = 0; i < n; i++) {
    if ([...new Set(matrix[i])].length !== n) return false
  }

  for (let row = 0; row < n; row++) {
    let columns = []
    for (let col = 0; col < n; col++) {
      columns.push(matrix[col][row])
    }
    if ([...new Set(columns)].length !== n) return false
  }
  return true
}
let matrix = [[1,1,1],[1,2,3],[1,2,3]]
console.log(checkValid(matrix))