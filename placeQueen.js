/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
  let res = []
  words.forEach((word, index) => {
    if (word.includes(x)) {
      res.push(index)
    }
  })
  return res
}
