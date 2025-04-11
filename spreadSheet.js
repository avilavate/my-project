/**
 * @param {number} rows
 */
var Spreadsheet = function (rows) {
  this.SS = Array(rows)
      .fill(null)
      .map(() => Array(26).fill(0)) // Fill with 0s
}

/**
* @param {string} cell
* @param {number} value
* @return {void}
*/
Spreadsheet.prototype.setCell = function (cell, value) {
  let row = cell.substring(1, cell.length)
  let col = cell.split('')[0]

  col = col.charCodeAt(0) - 65
  row = Number(row) - 1
  this.SS[row][col] = value
}

/**
* @param {string} cell
* @return {void}
*/
Spreadsheet.prototype.resetCell = function (cell) {
  let row = cell.substring(1, cell.length)
  let col = cell.split('')[0]

  col = col.charCodeAt(0) - 65
  row = Number(row) - 1

  this.SS[row][col] = 0
}

/**
* @param {string} formula
* @return {number}
*/
Spreadsheet.prototype.getValue = function (formula) {
  formula = formula.split('=')[1]
  formula = formula.split('+')

  let cell1 = formula[0]
  let cell2 = formula[1]

  if (Number.isInteger(Number(cell1)) && Number.isInteger(Number(cell2))) {
      return Number(cell1) + Number(cell2)
  } else if (
      !Number.isInteger(Number(cell1)) &&
      !Number.isInteger(Number(cell2))
  ) {
      let row1 = cell1.substring(0, 1)
      let col1 = cell1.substring(1, cell1.length)

      let c1 = row1.charCodeAt(0) - 65
      let r1 = Number(col1) - 1

      let row2 = cell2.substring(0, 1)
      let col2 = cell2.substring(1)

      let c2 = row2.charCodeAt(0) - 65
      let r2 = Number(col2) - 1
      return this.SS[r1][c1] + this.SS[r2][c2]
  } else if (
      !Number.isInteger(Number(cell1)) &&
      Number.isInteger(Number(cell2))
  ) {
      let row1 = cell1.substring(0, 1)
      let col1 = cell1.substring(1)

      let c1 = row1.charCodeAt(0) - 65
      let r1 = Number(col1) - 1

      let cell2Num = Number(cell2)
      return this.SS[r1][c1] + cell2Num
  } else if (
      Number.isInteger(Number(cell1)) &&
      !Number.isInteger(Number(cell2))
  ) {
      let row2 = cell2.substring(0, 1)
      let col2 = cell2.substring(1)

      let c2 = row2.charCodeAt(0) - 65
      let r2 = Number(col2) - 1

      let cell1Num = Number(cell1)
      return this.SS[r2][c2] + cell1Num
  }
}

