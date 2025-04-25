/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
    if (magazine.indexOf(ransomNote[i]) === -1) {
      return false
    } else {
      magazine = magazine.replace(ransomNote[i], '')
    }
  }
  return true
}

console.log(canConstruct('aa', 'aba'))
