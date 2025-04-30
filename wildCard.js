/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const regex=/p/gi
    return regex.test(s)
}
let s = 'acdcb',
    p = 'a*c?b'

console.log(isMatch(s, p)) // false
