/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
  let count = 0
  for (let i = low; i <= high; i++) {
    let str = String(i)
    if (str.length % 2 != 0) {
      continue
    } else {
      if (
        str
          .substring(0, str.length / 2)
          .split('')
          .reduce((acc, curr) => {
            return acc + Number(curr)
          }, 0) ===
        str
          .substring(str.length / 2)
          .split('')
          .reduce((acc, curr) => {
            return acc + Number(curr)
          }, 0)
      ) {
        count++
      }
    }
  }
  return count
}
console.log(countSymmetricIntegers(1, 100)) // 9
