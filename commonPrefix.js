/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  let res = []
  for (let i = 0; i < A.length; i++) {
    let subArrA = A.slice(0, i + 1).sort()
    let subArrB = B.slice(0, i + 1).sort()
    let counter = 0
    for (let j = 0; j <= i; j++) {
      if (subArrB.includes(subArrA[j])) {
        counter++
      }
    }
    res.push(counter)
  }
  return res
}

console.log(findThePrefixCommonArray((A = [1, 2, 3]), (B = [2, 3, 1]))) // [1,2,3,4]
