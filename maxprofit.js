/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    

    let min=Math.min(...prices);
    let minIndex=prices.indexOf(min);

    let max=Math.max(...prices.filter((x,i)=>i>minIndex));
    let maxindex=prices.indexOf(max);

    if(maxindex>minIndex){
        return max-min;
    }
    else{
        return 0;
    }
};

console.log(maxProfit([3,3,5,0,0,3,1,4])); //Output: 5