var MinStack = function () {
  this.stack = []
  //return null
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val)
  return null
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length === 0) return
  this.stack.splice(this.stack.length - 1, 1)
  return null
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length === 0) return
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.stack.length === 0) return
  let temp = [...this.stack]
  return temp.sort((a, b) => a - b)[0]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 * **/

let test = [
  'MinStack',
  'push',
  'push',
  'push',
  'getMin',
  'pop',
  'top',
  'getMin'
]
// [[],[-2],[0],[-3],[],[],[],[]]
let obj = new MinStack()

console.log(obj.push(-2))
console.log(obj.push(0))
console.log(obj.push(-3))
console.log(obj.getMin())
console.log(obj.pop())
console.log(obj.top())
console.log(obj.getMin())
