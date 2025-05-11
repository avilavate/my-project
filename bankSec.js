/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  let banks = []
  bank.forEach((curr, index) => {
   banks.push(curr.split('').map(curr=>parseInt(curr)))
  })
  let res = 0
  bank=banks;
  for (let row = 0; row < bank.length; row++) {
    for (let col = 0; col < bank.length; col++) {
      if (bank[row][col] === 1) {
        for (let i = row + 1; i < bank.length; i++) {
          res += bank[i].reduce((acc, curr) => acc + curr, 0)
        }
      }
    }
  }
  return res
}

console.log(numberOfBeams(["00000","00101","10100","11110","11100","01001","00100","11010"])) // expect 8
