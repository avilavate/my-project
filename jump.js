var jump = function(nums) {
    let pos=nums.length-1;

    let steps=0;
    while(pos>0){
        for(let i=0;i<pos;i++){
            if(i+nums[i]>=pos){
                pos=i;
                steps++;
                break;
            }
        }
    }
    return steps;

};

console.log(jump([2,3,1,1,4])); //Output: 2