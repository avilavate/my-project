/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let operators = ['+', '-', '*', '/']
  let stack = []
  let res = 0
  for (let i = 0; i < tokens.length; i++) {
    if (operators.includes(tokens[i])) {
      let op1 = stack.pop()
      let op2 = stack.pop()
      switch (tokens[i]) {
        case '+':
          res = op2 + op1
          break
        case '-':
          res = op2 - op1
          break
        case '*':
          res = op2 * op1
          break
        case '/':
          res = Math.trunc(op2 / op1)
          break
      }
      stack.push(res)
    } else {
      stack.push(parseInt(tokens[i]))
    }
  }
  return stack[0]
}
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])) 