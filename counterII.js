/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init) {
    let i=init;

    let increment=()=>i=i+1;
    let decrement=()=>i=i-1;
    let reset=()=>{i=init; return i};

    return { increment, decrement, reset }
};

const counter = createCounter(0);

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset());     // 0
console.log(counter.increment()); // 1