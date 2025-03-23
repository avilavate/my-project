function trap(arr){
    let i=0, min, max, minIndex, MaxIndex;
    while(i<arr.length-1){
        let rest= [...arr]
        min=arr.reduce((a,b)=>Math.min(a,b));
        max=arr.reduce((a,b)=>Math.max(a,b));

        minIndex=arr.indexOf(min);
        maxIndex = arr.indexOf(max);
        
        getCapacity(i, minIndex, maxIndex, arr);
        i++;
        }

      //  console.log(min,max, minIndex, MaxIndex);
    
}

function getCapacity(i, minIndex, maxIndex, arr){
    let water=0;
        let low=i;
        let capacity=[]
        let counter=i+1;
    if(arr[i]<=arr[maxIndex]){
        
        let scale =arr[minIndex];
            while (i < maxIndex) {
                water += scale-arr[low];
                i++;
            }
            
            capacity.push(water);
    }
    else{
        i++;
        trap(arr.splice((i+1)));
    }
    console.log(capacity);
}
trap([4,2,3])