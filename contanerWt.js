/**
 * @param {number} n
 * @param {number} w
 * @param {number} maxWeight
 * @return {number}
 */
var maxContainers = function (n, w, maxWeight) {
  let containers = 0
  while (containers < n * n ) {
    if (containers + 1 <= n * n && (containers + 1) * w > maxWeight) break
    containers++
  }
  return containers
}
let n = 2,
  w = 3,
  maxWeight = 4
console.log(maxContainers(n, w, maxWeight)) // 5
