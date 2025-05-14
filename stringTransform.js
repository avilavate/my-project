/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
    function gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    function lcm(n, m = 2) {
        return (n * 2) / gcd(n, 2);
    }
    return lcm(n)
};

console.log(smallestEvenMultiple(5)); // Output: 10