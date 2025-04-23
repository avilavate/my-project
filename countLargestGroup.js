/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  let goup = new Map()
  for (let i = 1; i <= n; i++) {
    let sum = String(i)
      .split('')
      .reduce((a, b) => a + Number(b), 0)
    if (goup.has(sum)) {
      goup.set(sum, goup.get(sum) + 1)
    } else {
      goup.set(sum, 1)
    }
  }
  group = Array.from(goup.values())
  let max = Math.max(...group)
  return group.filter(item => item === max).length
}
console.log(countLargestGroup(13)) // 4
