function myReverse(arr){
    let i=arr.length-1;
    let res=[];
    while(i>=0){
       res.push(arr[i]);
        i--;
    }

    return res;
}


var reverse = function(x) {
    x=x.toString().split('');
    revStr=((arr)=>{
            let i=arr.length-1;
            let res=[];
            while(i>=0){
            res.push(arr[i]);
                i--;
            }

            return res;
    })(x);

     let revInt=revStr.map(i=>parseInt(i));
    return revInt.join('');
};

console.log(reverse(123)); // [3,2,1]