/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
   return arr.map((curr, index)=>{
        return fn(curr, index);
    })
};

const arr = [1,2,3], fn = function plusI(n, i) { return n + i; }

console.log(map(arr, fn)); // [1, 3, 5]