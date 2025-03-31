/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  let len = arr1.length <= arr2.length ? arr1.length : arr2.length
  let a1 = arr1.map((val, index) => {
    return val.id
  })

  let a2 = arr2.map((val, index) => {
    return val.id
  })
  let res = [...new Set([...a1, ...a2])]

  let result = []

  res.forEach(ele => {
    if (!arr2.some(i => i.id === ele)) {
      result.push(...arr1.filter(j => j.id === ele))
    } else if (arr2.some(i => i.id === ele) && arr1.some(i => i.id === ele)) {
        result.push({...arr1.filter(j => j.id === ele)[0],...arr2.filter(j => j.id === ele)[0]})
      
    } else {
      result.push(...arr2.filter(j => j.id === ele))
    }
  })
   result= [...result];
  return result.map(item => item[1]);

}

