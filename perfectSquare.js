/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    return !String(Math.sqrt(num)).includes('.')
};

console.log(isPerfectSquare(4096)) // true