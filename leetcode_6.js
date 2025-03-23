var firstMissingPositive = function(nums) {
    let biggstPositive=nums.reduce((a,b)=> {
        if(a>=0 && b>=0) 
        {return Math.max(a,b)}
        else { return a>=0?a:b;}

     });
    let smallestPositive=nums.reduce(
        (a,b)=> {
            if(a>=0 && b>=0) 
            return Math.min(a,b)
            else { return a>=0?a:b;}
    
         }
    );

 if (smallestPositive>=1) return smallestPositive-1;
 else return biggstPositive+1;
};

console.log(firstMissingPositive([3,4,-1,1])); //3