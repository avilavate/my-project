/**
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function (rectangle) {
  this.rectangle = rectangle
}

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function (
  row1,
  col1,
  row2,
  col2,
  newValue
) {
  for (let row = row1; row <= row2; row++) {
    for (let col = col1; col < h; col++) {
      this.rectangle[row][col] = newValue // Update the rectangle with newValue
    }
  }
}

/**
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function (row, col) {
    return this.rectangle[row][col] // Return the value at the specified position
}


