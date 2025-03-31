/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
   return obj.constructor=== classFunction
};


  console.log(checkIfInstanceOf(new Date(), Date)) // true
 