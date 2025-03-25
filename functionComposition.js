var compose = function(functions) {
    let seriese;
    let x=4;
    let body="return "+ functions[functions.length-1].substring(functions[functions.length-1].indexOf('>')+1);
    let val1=new Function('x',body)(x);
    //let baseFun= new Function(args,'return x');
    for(var i = functions.length-2; i>=0; i--) {
        let body="return "+ functions[i].substring(functions[i].indexOf('>')+1);
        let f1=new Function('x',body)(val1);
        val1=f1;
    }
    return ()=>val1;
    
};


let out=compose(["x=>x+1", "x=>x*2", "x=>x+1"])()

console.log(out); //Output: 5