var plusOne = function(digits) {
    let carry=false;
   for (var i = digits.length - 1; i >= 0; i--) {
   //carry=false;
       if (digits[i] < 9) {
           digits[i]++;
           carry=false;
           return digits;
       } else {
           digits[i] = 0;
           carry=true;
       }
   }
   if(carry){
    digits.unshift(1);
   }
   return digits;
};


console.log(plusOne([9,9])); // [1,2,4]