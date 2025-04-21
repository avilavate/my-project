/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  //s = s.split('')

  let scores = []

  for (let i = 0; i < s.length; i++) {
    scores.push(s.charCodeAt(i))
  }
  let res = 0
  for (let i = 0; i < scores.length; i++) {
    if (i === scores.length - 1) {
      break
    }
    res += Math.abs(scores[i] - scores[i + 1])
  }
  return res
}
console.log(scoreOfString('hello')) // 4
