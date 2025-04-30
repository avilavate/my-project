/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
  this.iterator = iterator
}

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  return this.iterator.length > 0 ? this.iterator[0] : null // Return the next element in the iterator without advancing the iterator.
}

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  return this.iterator.shift()
}

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
 return this.iterator.length === 0 ? false : true // Return true if the iterator has more elements.
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */

const peekingIterator = new PeekingIterator([1, 2, 3]) // [1,2,3]
console.log(peekingIterator.next()) // return 1, the pointer moves to the next element [1,2,3].
console.log(peekingIterator.peek()) // return 2, the pointer does not move [1,2,3].
console.log(peekingIterator.next()) // return 2, the pointer moves to the next element [1,2,3]
console.log(peekingIterator.next()) // return 3, the pointer moves to the next element [1,2,3]
console.log(peekingIterator.hasNext()) // return False
