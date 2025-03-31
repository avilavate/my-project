/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let input=''
   s.split('').forEach(element => {
    if(element.toLowerCase()!==element.toUpperCase() && typeof element=="string"){
        input+=element;
    }
   });
 if(input.length<=1) return false;
   return input.toLowerCase().split('').reverse().join('')===input.toLowerCase().split('').join('')
   
};

console.log(isPalindrome("0P"));