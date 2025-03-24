/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x == 1) return 1;
    if (x == 0) return 0;

    let low = 0;
    let high = x;
    if(high==1) return 1;
  
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (mid * mid == x) return mid;
        if (mid * mid < x) {
            low = mid+1;
        }
        if (mid * mid > x) {
            high = mid-1;
        }
    }
    return low-1;

};

console.log(mySqrt(10)); //Output: 2