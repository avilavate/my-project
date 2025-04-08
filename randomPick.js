/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums
}

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  let indexes=[];
  this.nums.forEach((element, index) => {
    if(element===target)
        indexes.push(index);
  })
  return indexes[Math.floor(Math.random() * indexes.length)];
}

//  Your Solution object will be instantiated and called as such:

let nums = [1, 2, 3, 3, 3]
var obj = new Solution(nums)
//console.log(obj.pick(1))
console.log(obj.pick(3))
