var multiply = function(num1, num2) {

    let o1 = BigInt(num1); 
    let o2= BigInt(num2);
    let o3 = BigInt(o1*o2);

    return o3.toString();
};

console.log(multiply("123456789", "987654321")); //56088