/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    if (
      [...board[i].filter(ele => Number.isFinite(Number(ele)))].length !==
      [...new Set([...board[i].filter(ele => Number.isFinite(Number(ele)))])].length
    ) {
      return false
    }
  }
  for (let row = 0; row < 9; row++) {
    let cols = []
    for (let col = 0; col < 9; col++) {
      cols.push(board[col][row])
    }
    if (cols[0].length !== [...new Set(cols[0])].length) {
      //   return false
    }
  }
  let subArray = []
  for (let i = 0; i < 9; i = i + 3) {
    subArray.push(board[i])
    subArray.push(board[i + 1])
    subArray.push(board[i + 2])
  }
}

let board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
]

isValidSudoku(board)
