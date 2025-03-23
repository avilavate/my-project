function reverse(arr){
    let i=arr.length-1;
    let res=[];
    while(i>=0){
       res.push(arr[i]);
        i--;
    }

    return res;
}

