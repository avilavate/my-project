/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let res=false
    for (let index = 0; index < arr.length; index++) {
        if (index+2 < arr.length) {
            if (arr[index] % 2 !== 0 && arr[index + 1] % 2 !== 0 && arr[index + 2] % 2 !== 0) {
                res= true
                return res
            }
        }
    }
    return res
};

console.log(threeConsecutiveOdds([1,3,2])) // true