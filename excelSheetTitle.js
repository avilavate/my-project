var convertToTitle = function(columnNumber) {
    let n= Math.log(columnNumber)/Math.log(26);
   let reminder=columnNumber;
   
    let res=[];
  while(columnNumber%26!==0)
  {
    reminder=columnNumber%26;
    res.push(reminder);
    columnNumber=columnNumber-reminder;
  }

 n= Math.log(columnNumber)/Math.log(26);

 res.push(n)
return res;
};

console.log(convertToTitle(26*26*26-1));