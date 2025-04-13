/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function (s, k) {
  const getHash = str => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash += str.charCodeAt(i) - 96-1
      hash = hash % 26
    }
    return hash
  }
  let substrings = s.length / k
  let result = []
  let i = 0
  let korig=k
  while (substrings > 0) {
    substrings--
    //set.push(s.slice(i, k))
    result.push(String.fromCharCode(getHash(s.slice(i, k))+97))
    i = k
    k = k + korig
  }
  return result.join('')
}

console.log(stringHash('dnsvrymy', 2))
