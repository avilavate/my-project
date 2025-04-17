/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cap = capacity
  this.LRU = new Map()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let value = this.LRU.get(key)
  if (value !== undefined) {
    this.LRU.delete(key)
    this.LRU.set(key, value)
  }
  return isFinite(value) ? value : -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.LRU.size < this.cap) {
    this.LRU.set(key, value)
  } else if (this.LRU.has(key)) {
    this.LRU.delete(key)
    this.LRU.set(key, value)
  } else {
    this.LRU.delete([...this.LRU.keys()][0])
    this.LRU.set(key, value)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
const lRUCache = new LRUCache(2)

console.log(lRUCache.get(2)) // Expected: -1
console.log(lRUCache.put(2, 6)) // Expected: null
console.log(lRUCache.get(1)) // Expected: -1
console.log(lRUCache.put(1, 5)) // Expected: null
console.log(lRUCache.put(1, 2)) // Expected: null
console.log(lRUCache.get(1)) // Expected: 2
console.log(lRUCache.get(2)) // Expected: 6
