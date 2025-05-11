const objA = { name: "A" };
const objB = { name: "B" };
const objC = { name: "C" };
const objD = { name: "D" };
const objE = { name: "E" };

// Creating circular references
objA.ref = objB;
objB.ref = objC;
objC.ref = objD;
objD.ref = objE;
objE.ref = objA; // Circular back to A

// Adding more depth and references
objA.other = objC;
objB.other = objE;
objC.other = objA;
objD.other = objB;
objE.other = objD;

//console.log(JSON.stringify(objA));

const { stringify, parse } = require('flatted');

// Create an object with a circular reference
const obj = { name: 'Node' };

const jsonString = stringify(objA);
