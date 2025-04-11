/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let primes = Array(n).fill(true)
  primes[0] = false
  primes[1] = false

  for (let i = 2; i * i < n; i++) {
    if (primes[i]) {
      for (let j = i * i; j < n; j += i) {
        primes[j] = false
      }
    }
  }
  return primes.filter(ele => ele).length // +1 for 2
}

console.log(countPrimes(10)) // 4
