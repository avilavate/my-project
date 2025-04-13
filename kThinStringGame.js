/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {
  let str = 'a'
  if (k == 1) return str
  while (k>0) {
    let next = String.fromCharCode(
      str.charCodeAt(0) + 1 == 65 ? 0 : str.charCodeAt(0) + 1
    )
    str = str+next
    k--;
  }
  return str
}

console.log(kthCharacter(2)) // a
