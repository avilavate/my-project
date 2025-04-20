var MyHashSet = function () {
  this.hash = new Set()
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  this.hash.add(key)
}

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  this.hash.delete(key)
}

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.hash.has(key)
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

let myHashSet = new MyHashSet()
console.log(myHashSet.add(1)) // set = [1]
console.log(myHashSet.add(2)) // )set = [1, 2]
console.log(myHashSet.contains(1)) // return True
console.log(myHashSet.contains(3)) // return False, (not found)
console.log(myHashSet.add(2)) // set = [1, 2]
console.log(myHashSet.contains(2)) // return True
console.log(myHashSet.remove(2)) // set = [1]
console.log(myHashSet.contains(2)) // return False, (already removed)

//[null, null, true, false, null, true, null, false]
