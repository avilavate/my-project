/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let binaryN=n.toString(2);
    let res=0;
    // binaryN.split("").forEach(element => {
    //     if(element==="1") res++;
    // });
    res=binaryN.split("").reduce((res,ele)=>
        {
            if(ele==="1"){
                res=res+1;
            }
            return res;
        },0
        )
return res;
};

//better version



console.log(hammingWeight(5));