/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x=0
    operations.forEach((operation) => {
        if (operation === '--X' || operation === 'X--') {
            x--;
        } else {
            x++;
        }
    });
    return x;
};

console.log(finalValueAfterOperations(["--X","X++","X++"])) // 1