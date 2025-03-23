var addTwoNumbers = function (l1, l2) {
   l1=reverse(l1);
    l2=reverse(l2);

    var num1 = parseInt(l1.join(''));
    var num2 = parseInt(l2.join(''));

    let sum= num1+num2;
    sum=reverse(sum.toString().split(''));
    sum=sum.map(i=>parseInt(i));
    return sum;
};

function reverse(arr){
    let i=arr.length-1;
    let res=[];
    while(i>=0){
       res.push(arr[i]);
        i--;
    }

    return res;
}



console.log(addTwoNumbers([2,4,3],[5,6,4])); // [7,0,8]