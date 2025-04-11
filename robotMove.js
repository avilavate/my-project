/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  moves = moves.split('')

  return (
    moves.reduce((acc, cur) => {
      if (cur == 'U') {
        acc = acc + 1
      }
      return acc
    }, 0) ==
      moves.reduce((acc, cur) => {
        if (cur == 'D') {
          acc = acc + 1
        }
        return acc
      }, 0) &&
    moves.reduce((acc, cur) => {
      if (cur == 'L') {
        acc = acc + 1
      }
      return acc
    }, 0) ==
      moves.reduce((acc, cur) => {
        if (cur == 'R') {
          acc = acc + 1
        }
        return acc
      }, 0)
  )
}

judgeCircle('LL')
