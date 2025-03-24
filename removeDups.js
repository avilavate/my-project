/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let a = new Set(nums);
    let res = [];
    a.forEach((x) => {
        res.push(x);
    });
    nums=[...res];
    return nums
};

console.log(removeDuplicates( [1,1,2])); //Output: 1