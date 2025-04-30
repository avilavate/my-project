/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let answer = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer[i-1] = 'FizzBuzz'
    } else if (i % 3 === 0) {
      answer[i-1] = 'Fizz'
    } else if (i % 5 === 0) {
      answer[i-1] = 'Buzz'
    } else {
      answer[i-1] = i.toString()
    }
  }

  return answer
}

//console.log(fizzBuzz(15)) // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
console.log(fizzBuzz(3)) // ["1","2","Fizz"]
