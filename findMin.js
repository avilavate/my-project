/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i+1]) {
            return nums[i+1]
        }
    }
};

console.log(findMin([4,5,6,7,0,1,2]));