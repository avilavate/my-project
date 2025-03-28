/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
   let res=[]
  nums.forEach(element => {
    if(element!==val){
        res.push(element)
    }
  });
 nums.splice(0, nums.length, ...res)
};