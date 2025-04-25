/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
       if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
};