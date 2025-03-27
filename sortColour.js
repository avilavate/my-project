/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let twos=0;
    let once=0;
    let zeros=0;
    nums.forEach((i)=>{if(i==2){twos++}});
    nums.forEach((i)=>{if(i==1){once++}});
    nums.forEach((i)=>{if(i==0){zeros++}});

    let res=Array(zeros).fill(0).
    concat(
         Array(once).fill(1)).
         concat(
            Array(twos).fill(2));

    nums.splice(0, nums.length, ...res)
};
let nums=[2,0,2,1,1,0]
console.log(sortColors(nums))
console.log(nums)