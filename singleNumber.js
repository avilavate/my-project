/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
 nums= nums.sort() ;

 for (let i = 0; i < nums.length; i++) {
    if(nums[i]^nums[i+1]>0)
        return nums[i+1]
    
 }
}
console.log(singleNumber([2, 2, 1]))
