/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let res=[];
    while(left<=right){
        let digits=left.toString().split('');
        if(!digits.some(ele=>left%ele!==0)){
            res.push(left);
        }
        left++;
    }
    return res;
};

console.log(selfDividingNumbers(128,129))