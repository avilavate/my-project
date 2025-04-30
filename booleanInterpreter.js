/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  expression = expression.split('')
  const parseOr = expression => {}
  const parseAnd = expression => {}
  const parseNot = expression => {}
  const parseParen = expression => {
    return expression.split(',')
  }

  const parse = expession => {
    for (let i = 0; i < expression.length; i++) {
        if(expression[i]==='&'){
            
        }
      if (expression[i] === '(') {
        let subExpr = espression.slice(i, expression.indexOf(')'))
        parseParen(subExpr)
      }
    }
  }
}
