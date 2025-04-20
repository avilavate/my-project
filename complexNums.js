/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
  let real1 = num1.split('+')[0]
  let imag1 = num1.split('+')[1]

  let real2 = num2.split('+')[0]
  let imag2 = num2.split('+')[1]

  //(1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i

  let op1 = Number(real1) * Number(real2)

  let op2 =
    Number(real1) * Number(imag2.replace('i', '')) +
    Number(imag1.replace('i', '')) * Number(real2)

  let op3 = Number(imag1.replace('i', '')) * Number(imag2.replace('i', '')) * -1

  return op1 + op3 + '+' + op2 + 'i'
}

console.log(complexNumberMultiply(num1 = '1+-1i', num2 = '1+-1i'))
