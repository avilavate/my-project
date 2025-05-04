/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
  this.nums = nums
}

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((acc, val) => acc + val, 0)
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
 if(this.nums.length === 0) return '[]'
  let res = '['
  for (let i = 0; i < this.nums.length; i++) {
    if (i === this.nums.length - 1) {
      res += this.nums[i] + ']'
    } else {
      res += this.nums[i] + ','
    }
  }

  return res
}


 const obj1 = new ArrayWrapper([1,2]);
 const obj2 = new ArrayWrapper([3,4]);
 console.log(obj1-obj2); // 10
 console.log(String(obj1)); // "[1,2]"
 String(obj2); // "[3,4]"
 
