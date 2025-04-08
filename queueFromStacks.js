/*
void push(int x) Pushes element x to the top of the stack.
int pop() Removes the element on the top of the stack and returns it.
int top() Returns the element on the top of the stack.
boolean empty() Returns true if the stack is empty, false otherwise.
*/

var MyStack = function () {
  this.Stack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  return this.Stack.push(x)
}

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.Stack.pop()
}

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (this.Stack.length === 0) return null
  return this.Stack[this.Stack.length - 1]
}

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.Stack.length === 0
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
