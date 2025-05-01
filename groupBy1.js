/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let keys = [...new Set(groupSizes)]
  let res = []
  for (let i = 0; i < keys.length; i++) {
    let arr = []
    groupSizes.forEach((cur, index) => {
      if (cur === keys[i]) {
        if (arr.length < cur) arr.push(index)
        else {
          res.push(arr)
          arr = []
          arr.push(index)
        }
      }
    })
    res.push(arr)
  }
  return res
}
console.log(groupThePeople([2,1,3,3,3,2])) // [[0,1,2],[3,4,5],[6]]
