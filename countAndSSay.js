/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  const countNums = nums => {
    let res = []
    for (let i = 0; i < nums.length; i++) {
      let frequency = 1
      let iOrig = i
      while (nums[i] === nums[i + 1] && i + 1 < nums.length) {
        frequency++
        i++
      }
      res.push([frequency, nums[iOrig]])
    }
    return res
  }
  const regenrateNums = frequencies => {
    let res = ''
    for (let i = 0; i < frequencies.length; i++) {
      let pair = frequencies[i]
      res += Array(pair[0]).fill(pair[1]).join('')
    }
    return res
  }
  
  frequencies = [[1]]
  while (n!==1) {
    let temp = countNums(frequencies.flat())
    frequencies = temp.flat()
    n--
  }
  return String(frequencies.join(''))
}
console.log(countAndSay(1))
