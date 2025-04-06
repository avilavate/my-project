const calc = function (expression) {
    expression=expression.replace(' ','').trim().split('');

    for (let i = 0; i < expression.length; i++) {
        if(expression[i] === '+' || expression[i] === '-' || expression[i] === '*' || expression[i] === '/') {
            let left = Number(expression.slice(0, i).join(''));
            let right = Number(expression.slice(i + 1).join(''));
            let operator = expression[i];
            switch (operator) {
                case '+':
                    return left + right;
                case '-':
                    return left - right;
                case '*':
                    return left * right;
                case '/':
                    return left / right;
            }
        }
        if(expression[i]=='('){
            
        }
    }
  };