/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    if (
      [...board[i].filter(ele => Number.isFinite(Number(ele)))].length !==
      [...new Set([...board[i].filter(ele => Number.isFinite(Number(ele)))])]
        .length
    ) {
      return false
    }
  }
  let cols = []
  for (let row = 0; row < 9; row++) {
    let colv = []
    for (let col = 0; col < 9; col++) {
      colv.push(board[col][row])
    }
    cols.push(colv)
    // if (cols[0].length !== [...new Set(cols[0])].length) {
    //    //  return false
    // }
  }
  for (let i = 0; i < 9; i++) {
    if (
      [...cols[i].filter(ele => Number.isFinite(Number(ele)))].length !==
      [...new Set([...cols[i].filter(ele => Number.isFinite(Number(ele)))])]
        .length
    ) {
      return false
    }
  }
  let subArray = []
  for (let i = 0; i < 9; i = i + 3) {
    subArray.push(board.slice(i, i + 3).map(ele => ele.slice(0, 3)))
    subArray.push(board.slice(i, i + 3).map(ele => ele.slice(3, 6)))
    subArray.push(board.slice(i, i + 3).map(ele => ele.slice(6, 10)))
  }
  let res = true
  for (let i = 0; i < 9; i++) {
    let setArr = [...new Set(subArray[i].flat())]
    if (
      [...setArr.filter(ele => Number.isFinite(Number(ele)))].length !=
      [...subArray[i].flat().filter(ele => Number.isFinite(Number(ele)))].length
    ) {
      return false
    }
  }
  return true
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

console.log(isValidSudoku(board))
