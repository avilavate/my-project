/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  word = word.split('')
  let cords = []
  for (let i = 0; i < board.length && cords.length == 0; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        cords.push(i)
        cords.push(j)
        break
      }
    }
  }
  if (cords.length === 0) return false
  word.shift()
  while (true) {
    if (board[cords[0]][cords[1] + 1] === word[0]) {
      board[cords[0]][cords[1] + 1] = ''
      word.shift()
      cords[1] = cords[1] + 1
    } else if (board[cords[0]][cords[1] - 1] === word[0]) {
      board[cords[0]][cords[1] - 1] = ''
      word.shift()
      cords[1] = cords[1] - 1
    } else if (board[cords[0] + 1][cords[1]] === word[0]) {
      board[cords[0] + 1][cords[1]] = ''
      word.shift()
      cords[0] = cords[0] + 1
    } else if (board[cords[0] - 1][cords[1]] === word[0]) {
      board[cords[0] - 1][cords[1]] = ''
      word.shift()
      cords[0] = cords[0] - 1
    } else {
      return false
    }
    if (word.length === 0) return true
  }
}

let board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
]
let word = 'ABCB'
console.log(exist(board, word)) // Output: false
