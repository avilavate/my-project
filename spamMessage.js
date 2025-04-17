/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function (message, bannedWords) {
  let counter = 0
  let s = new Set(bannedWords)
  for (let i = 0; i < message.length; i++) {
    if (s.has(message[i]) && counter < 2) {
      counter++
    }
    if (counter == 2) return true
  }

  return false
}

let message = ['l', 'i', 'l', 'i', 'l'],
  bannedWords = ['d', 'a', 'i', 'v', 'a']

console.log(reportSpam(message, bannedWords))
