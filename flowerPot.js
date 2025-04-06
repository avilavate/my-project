/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length && n !== 0; i++) {
    if (
      i !== 0 &&
      flowerbed[i - 1] == 0 &&
      flowerbed[i + 1] === 0 &&
      flowerbed[i] === 0
    ) {
      n--;
      i=i+1;
      continue;
    } else if (i === 0 && flowerbed[i + 1] === 0 && flowerbed[i] === 0) {
      n--;
      i=i+1;
      continue;
    } else if (
      i === flowerbed.length - 1 &&
      flowerbed[i - 1] === 0 &&
      flowerbed[i] === 0
    ) {
      n--
      continue
    }
  }
  return n === 0
}

console.log(canPlaceFlowers([1,0,0,0,0,1], 2)) // true
//console.log(canPlaceFlowers([1,0,0,0,0,0,1], 3)) // false
