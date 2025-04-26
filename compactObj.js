/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  let res = []
  obj = obj.flat(Infinity)
  for (let i = 0; i < obj.length; i++) {
    if (
      obj[i] === false ||
      obj[i] === 0 ||
      obj[i] === null ||
      obj[i] === undefined ||
      isNaN(obj[i]) ||
      obj[i] === ''
    )
      continue
    else res.push(obj[i])
  }

  return res
}

console.log(compactObject(obj = {"a": null, "b": [false, 1]})) // [1,2,3,0]
