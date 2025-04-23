/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    num=num.toString(2);
    num=num.split('').map((x)=>x==='1'?'0':'1').join('');
    return parseInt(num,2);
    
};

console.log(findComplement(5)); // Output: 2