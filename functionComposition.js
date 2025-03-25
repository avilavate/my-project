var compose = function(functions) {
    let funcs=functions.reverse();
    return function(x) {
    return funcs.reduce((acc, func) => func(acc), x);
    };
};


let out=compose([x=>x+1, x=>x*2, x=>x+1])

console.log(out(4)); //Output: 5