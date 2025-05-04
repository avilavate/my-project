/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    let map = new Map();
    let count = 0;
  
    for (let [a, b] of dominoes) {
      // normalize the domino (order doesn't matter)
      let key = a < b ? `${a}-${b}` : `${b}-${a}`;
  
      // count how many identical keys we've seen before
      let seen = map.get(key) || 0;
      count += seen; // for each match, we get that many new pairs
      map.set(key, seen + 1);
    }
  
    return count;
  };
  let dominoes = [
    [1, 2],
    [2, 1],
    [3, 4],
    [5, 6]
  ];
  
  console.log(numEquivDominoPairs(dominoes)); // ✅ Should print: 1
  