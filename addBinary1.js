/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {

  let res = []
  let carry = 0
  let maxLength = Math.max(a.length, b.length)
  a.length < b.length
    ? (a = a.padStart(maxLength, '0'))
    : (b = b.padStart(maxLength, '0'))
    if(a.length<=50){
        return((parseInt(a,2)+parseInt(b,2)).toString(2))
    }
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] === '1' && b[i] === '1') {
      if (carry) {
        res.push('1')
        carry = 1
      } else {
        res.push('0')
        carry = 1
      }
    }
    if (a[i] === '1' && b[i] === '0') {
      if (carry) {
        res.push('0')
        carry = 1
      } else {
        res.push('1')
        carry = 0
      }
    }
    if (a[i] === '0' && b[i] === '1') {
      if (carry) {
        res.push('0')
        carry = 1
      } else {
        res.push('1')
        carry = 0
      }
    }
    if (a[i] === '0' && b[i] === '0') {
      if (carry) {
        res.push('1')
        carry = 0
      } else {
        res.push('0')
        carry = 0
      }
    }
  }
  if (carry) {
    res.push('1')
  }
  return res.reverse().join('')
}

console.log(addBinary('1111', '1111')) // 100
