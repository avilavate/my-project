var findShortestSubArray = function (nums) {
  let unique = [...new Set(nums)]
  let res = []
  for (let i = 0; i < unique.length; i++) {
    let ctr = 0
    for (let j = 0; j < nums.length; j++) {
      if (unique[i] === nums[j]) {
        ctr++
      }
    }
    res.push(ctr)
  }
  return Math.max(...res)
}
console.log(findShortestSubArray((nums = [1, 2, 2, 3, 1])))
