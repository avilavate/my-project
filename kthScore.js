/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function (score, k) {
  let col = new Map()
  for (let i = 0; i < score.length; i++) {
    col.set(i, score[i][k])
  }

  col = [...col].sort((a, b) => b[1] - a[1])

  for (let i = 0; i < col.length; i++) {
    col[i] = col[i][0]
  }

  let result = []
  for (let i = 0; i < col.length; i++) {
    result.push(score[col[i]])
  }
  return result
} // [[9,8,7,3],[10,6,9,1],[8,3,7,2]