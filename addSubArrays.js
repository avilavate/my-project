const addSubArrays = function (arr) {
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      addSubArrays(arr[i])
    } else {
      res += arr[i]
    }
  }
  return res;
}

console.log(addSubArrays([[1,2],1,[5,5]]));

