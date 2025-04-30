/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
  let res = []
  for (let i = 0; i < pref.length; i++) {
    if (i === 0) {
      res.push(pref[i])
    } else {
      res.push(pref[i] ^ res.reduce((a, b) => a ^ b))
    }
  }
  return res
}
console.log(findArray([13])) // [5,7,2,3,]
