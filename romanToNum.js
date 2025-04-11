/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let keyboard = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  let res = []
  if (digits.length === 0) return []
  if (digits.length === 1) return keyboard[digits].split('')

  digits = digits.split('');
  

  return res;
}
console.log(letterCombinations('23'))