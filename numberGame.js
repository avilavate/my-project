var numberGame = function(nums) {
    let play=[];
    let res=[]
  
    let arr=nums;

    

    while(arr.length){
        let minIndex=-1;
       
        minIndex=arr.indexOf( Math.min(...arr));
        play.push(arr.splice(minIndex,1)[0]);
    
        
        minIndex=arr.indexOf(Math.min(...arr));
        play.push(arr.splice(minIndex,1)[0]);

        res.push(play[1]);
        res.push(play[0]);

        play=[];
    }

    return res;
};

console.log(numberGame([2,5])) //Output: [2,1,4,3,6,5,8,7,10,9]   