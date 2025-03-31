/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let res = [];
    let lastIndex = -1;
    for (let index = triangle.length - 1; index >= 0; index--) {
        if (index == triangle.length - 1) {
            let min = Math.min(...triangle[index]);
            res.push(min);
            lastIndex = triangle[index].indexOf(min);
        } else {
            let minIndex = lastIndex - 1 >= 0 ? lastIndex - 1 : 0;
            let maxIndex = lastIndex + 1 < triangle[index].length ? lastIndex + 1 : triangle[index].length - 1;

            let candidates = triangle[index].filter((ele, i) => i >= minIndex && i <= maxIndex);
            let min = Math.min(...candidates);
            res.push(min);
            lastIndex = triangle[index].indexOf(min);
        }
    }

    return res.reduce((acc, ele) => acc + ele, 0);
};

let triangle1 = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
console.log(minimumTotal(triangle1)); // Output: 11

let triangle2 = [[-1], [3, 2], [-3, 1, -1]];
console.log(minimumTotal(triangle2)); // Output: -1
