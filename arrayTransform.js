/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let res=0
    for (let index = 0; index < nums.length; index++) {
        if(index>0) init=res;
        res= fn(init,nums[index]);
    }
    return res;
};

let nums=[1,2,3,4]
let fn = function sum(accum, curr) { 
    return (curr + accum); }

console.log(reduce(nums,fn,0))