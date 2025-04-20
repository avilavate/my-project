/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  s = s.split('')
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let stringVowels = []

  s.forEach((element, index) => {
    if (vowels.includes(element.toLowerCase())) {
      stringVowels.push(element)
    }
  })
  let res = []
  let ctr = 0
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLocaleLowerCase())) {
      res.push(stringVowels[stringVowels.length-1 - ctr])
      ctr++
    } else {
      res.push(s[i])
    }
  }
  return res.join('')
}

console.log(reverseVowels((s = 'IceCreAm')))
