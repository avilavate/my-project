/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
  for (let i = 0; i < command.length; i++) {
    if (command[i] === '(' && command[i + 1] === ')') {
      command = command.replace('()', 'o')
    }
    if (command[i] === '(' && command[i + 1] === 'a' && command[i + 2] === 'l' && command[i + 3] === ')') {
      command = command.replace('(al)', 'al')
    }
  }
  return command
}

console.log(interpret('G()(al)')) // Output: 'Goal'