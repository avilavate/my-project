/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  const stack = []
  const parse = expession => {
    for (let i = 0; i < expression.length; i++) {
      if (expression[i] === '&') {
        let op1=stack.pop()
        let op2=stack.pop()
        op1=op1==='t'?true:false
        op2=op2==='t'?true:false  
        stack.push(op1 && op2?'t':'f')
      }
      if(expression[i] === '|') {
        let op1=stack.pop()
        let op2=stack.pop()
        op1=op1==='t'?true:false
        op2=op2==='t'?true:false  
        stack.push(op1 || op2?'t':'f')
      }
      if (expression[i] === '(') {
        let subExpr=expession.slice(i,expression.indexOf(')'))
        i=expression.indexOf(')')
        
      }

      if (expression[i] === 't' || expression[i] === 'f') {
        stack.push(expression[i])
      }
    }
  }
}
