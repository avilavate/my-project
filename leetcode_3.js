

var xorOperation = function(n, start) {
    let nums=[];
    for(let i=0; i<n; i++){
        nums[i] = start + 2 * i
    }

    return nums.reduce((acc, curr) => acc^curr, 0);
  //return nums; 
};

console.log(xorOperation(5,0)); // 8