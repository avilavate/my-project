/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let solution = []
  for (let x = 0; x <= n; x++) {
    for (let y = 0; y <= n; y++) {
      if (x + (2 * y )=== n) {
        solution.push([x, y])
      }
    }
  }
  for (let y = 0; y <= n; y++) {
    for (let x = 0; x <= n; x++) {
      if (x + (2 * y) === n) {
        solution.push([x,y])
      }
    }
  }
  let nouncae=solution.filter((x)=>x[0]===x[1]).length
  
  solution = Array.from(new Set(solution.map(JSON.stringify)), JSON.parse)
  return solution.length+(nouncae!==0?nouncae-1:0)
}

for (let i = 5; i <= 5; i++) {
  console.log(`Number of ways to climb ${i} stairs:`, climbStairs(i))
}

